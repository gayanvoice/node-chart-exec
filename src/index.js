const core = require('@actions/core');
const {ChartJSNodeCanvas} = require('chartjs-node-canvas');
const file = require('./file/file');
let Index = function () {
    let main = async function (commandModel) {
        core.info(`Node Chart Exec Start`);
        const chartJSNodeCanvas = new ChartJSNodeCanvas({width: 600, height: 400});
        const configType = commandModel.type;
        const configLabels = JSON.parse(commandModel.labels);
        const configDataset = JSON.parse(commandModel.dataset);
        const configOutputFile = commandModel.outputFile;
        core.info(`Type ${configType}`);
        core.info(`Labels ${JSON.stringify(configLabels)}`);
        core.info(`Output ${configOutputFile}`);
        let datasets = [];
        let numberOfDatasets = 1;
        for (const dataset of configDataset) {
            datasets.push({
                label: dataset.label,
                data: dataset.data,
                backgroundColor: dataset.backgroundColor,
                borderColor: dataset.borderColor
            });
            core.info(`Dataset [${numberOfDatasets}/${configDataset.length}]`);
            core.info(`label ${dataset.label}`);
            core.info(`data ${dataset.data}`);
            core.info(`background color ${dataset.backgroundColor}`);
            core.info(`border color-${dataset.borderColor}`);
            numberOfDatasets++;
        }
        const configuration = {
            type: configType,
            data: {
                labels: configLabels,
                datasets: datasets
            }
        };
        try {
            const image = await chartJSNodeCanvas.renderToBuffer(configuration);
            await file.createImage(configOutputFile, image);
            core.info(`Node Chart Exec Complete`);
        } catch (error) {
            core.info(`Node Chart Exec Failed`);
            core.info(`Error ${error}`);
        }
    }
    return {
        main: main,
    };
}();
module.exports = Index;