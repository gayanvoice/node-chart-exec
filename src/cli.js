#!/usr/bin/env node
const args = require('yargs').argv;
const index = require('./index');
const CommandModel = require('./model/CommandModel');
const cli = async () => {
    let type = args.type;
    let options = args.options;
    let height = args.height;
    let width = args.width;
    let labels = args.labels
    let dataset = args.dataset;
    let outputFile = args.outputfile;
    let commandModel = new CommandModel(type, options, height, width, labels, dataset, outputFile)
    return index.main(commandModel);
};
cli().then(() => {});