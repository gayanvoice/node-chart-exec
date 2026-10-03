const test = require('node:test');
const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const {mkdtempSync, readFileSync, rmSync} = require('node:fs');
const {tmpdir} = require('node:os');
const path = require('node:path');

for (const type of ['line', 'bar']) {
    for (const options of ['false', 'true']) {
        test(`CLI renders ${type} with options=${options}`, () => {
            const directory = mkdtempSync(path.join(tmpdir(), 'node-chart-exec-'));
            try {
                const outputFile = path.join(directory, 'nested', 'chart.png');
                const stdout = execFileSync(process.execPath, [
                    path.join(__dirname, 'cli.js'),
                    `--type=${type}`, `--options=${options}`,
                    '--height=120', '--width=180',
                    '--labels=["9/26","9/27","9/28"]',
                    '--dataset=[{"label":"Views","data":[7,5,14],"backgroundColor":"#00a1c1","borderColor":"#008bad"}]',
                    `--outputfile=${outputFile}`
                ], {encoding: 'utf8'});
                assert.match(stdout, /Image file created at/);
                const image = readFileSync(outputFile);
                assert.equal(image.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
                assert.equal(image.readUInt32BE(16), 180);
                assert.equal(image.readUInt32BE(20), 120);
                assert.ok(image.length > 500);
            } finally {
                rmSync(directory, {recursive: true, force: true});
            }
        });
    }
}

test('package main renders a PNG from the ncc build', async () => {
    const directory = mkdtempSync(path.join(tmpdir(), 'node-chart-exec-'));
    try {
        const outputFile = path.join(directory, 'api.png');
        const index = require('..');
        const CommandModel = require('./model/CommandModel');
        await index.main(new CommandModel('line', 'true', 120, 180,
            '["A","B"]', '[{"label":"Views","data":[1,2],"backgroundColor":"#00a1c1","borderColor":"#008bad"}]', outputFile));
        const image = readFileSync(outputFile);
        assert.equal(image.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
        assert.equal(image.readUInt32BE(16), 180);
        assert.equal(image.readUInt32BE(20), 120);
    } finally {
        rmSync(directory, {recursive: true, force: true});
    }
});
