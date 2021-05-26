const core = require('@actions/core');
const {ChartJSNodeCanvas} = require('chartjs-node-canvas');
const file = require('./core/file');
let Index = function () {
    let isValidInput = function (input) {
        return !(input === '' || input === undefined);
    }
    let isValidJson = function (json) {
        if(isValidInput(json)){
            try {
                JSON.parse(json)
                return true;
            } catch (error) {
                return false;
            }
        } else {
            return false;
        }
    }
    let main = async function (commandModel) {
        core.info(`Node Chart Exec Started`);
        if(isValidInput(commandModel.type)){
            if(isValidInput(commandModel.height)){
                if(isValidInput(commandModel.width)){
                    if(isValidInput(commandModel.outputFile)){
                        if(isValidJson(commandModel.labels)){
                            if(isValidJson(commandModel.dataset)){
                                core.info(`All inputs are validated`);
                                const configType = commandModel.type;
                                const configHeight = commandModel.height;
                                const configWidth = commandModel.width;
                                const configOutputFile = commandModel.outputFile;
                                const configLabels = JSON.parse(commandModel.labels);
                                const configDataset = JSON.parse(commandModel.dataset);
                                const chartJSNodeCanvas = new ChartJSNodeCanvas({width: configWidth, height: configHeight});
                                core.info(`Canvas width=${configWidth} height=${configHeight}`);
                                core.info(`Chart type=${configType} labels=${JSON.stringify(configLabels)} output-file=${configOutputFile}`);
                                let datasets = [];
                                let numberOfDatasets = 1;
                                for (const dataset of configDataset) {
                                    datasets.push({
                                        label: dataset.label,
                                        data: dataset.data,
                                        backgroundColor: dataset.backgroundColor,
                                        borderColor: dataset.borderColor
                                    });
                                    core.info(`Dataset [${numberOfDatasets}/${configDataset.length}] label=${dataset.label} ` +
                                        `data=${dataset.data} background-color=${dataset.backgroundColor} border-color=${dataset.borderColor}`);
                                    numberOfDatasets++;
                                }
                                const configuration = {
                                    type: configType,
                                    data: {
                                        labels: configLabels,
                                        datasets: datasets
                                    },
                                    options: {
                                        legend: { display: false },
                                        scales: {
                                            xAxes: [
                                                {
                                                    display: false,
                                                    gridLines: {
                                                        display: false,
                                                    },
                                                },
                                            ],
                                            yAxes: [
                                                {
                                                    display: false,
                                                    gridLines: {
                                                        display: false,
                                                    },
                                                },
                                            ],
                                        },
                                    }
                                };
                                try {
                                    const image = await chartJSNodeCanvas.renderToBuffer(configuration);
                                    await file.createImage(configOutputFile, image);
                                } catch (error) {
                                    core.info(`Node Chart Exec Failed`);
                                    core.info(`Error ${error}`);
                                }
                            } else {
                                core.info(`Please enter a valid dataset`)
                            }
                        } else {
                            core.info(`Please enter valid labels`)
                        }
                    } else {
                        core.info(`Please enter a valid output file`)
                    }
                } else {
                    core.info(`Please enter a valid canvas width`)
                }
            } else {
                core.info(`Please enter a valid canvas height`)
            }
        } else {
            core.info(`Please enter a valid chart type`)
        }
        core.info(`Node Chart Exec Completed`);
    }
    return {
        main: main,
    };
}();
module.exports = Index;