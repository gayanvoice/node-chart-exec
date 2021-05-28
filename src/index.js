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
        console.log(`Node Chart Exec Started`);
        if(isValidInput(commandModel.type)){
            if(isValidInput(commandModel.options)) {
                if (isValidInput(commandModel.height)) {
                    if (isValidInput(commandModel.width)) {
                        if (isValidInput(commandModel.outputFile)) {
                            if (isValidJson(commandModel.labels)) {
                                if (isValidJson(commandModel.dataset)) {
                                    console.log(`All inputs are validated`);
                                    const configType = commandModel.type;
                                    const configOptions = commandModel.options;
                                    const configHeight = commandModel.height;
                                    const configWidth = commandModel.width;
                                    const configOutputFile = commandModel.outputFile;
                                    const configLabels = JSON.parse(commandModel.labels);
                                    const configDataset = JSON.parse(commandModel.dataset);
                                    let configuration;
                                    const chartJSNodeCanvas = new ChartJSNodeCanvas({
                                        width: configWidth,
                                        height: configHeight
                                    });
                                    console.log(`Canvas width=${configWidth} height=${configHeight}`);
                                    console.log(`Chart type='${configType}' options='${configOptions}' labels=${JSON.stringify(configLabels)} output-file='${configOutputFile}'`);
                                    let datasets = [];
                                    let numberOfDatasets = 1;
                                    for (const dataset of configDataset) {
                                        datasets.push({
                                            label: dataset.label,
                                            data: dataset.data,
                                            backgroundColor: dataset.backgroundColor,
                                            borderColor: dataset.borderColor
                                        });
                                        console.log(`Dataset [${numberOfDatasets}/${configDataset.length}] label='${dataset.label}' ` +
                                            `data=[${dataset.data}] background-color='${dataset.backgroundColor}' border-color='${dataset.borderColor}'`);
                                        numberOfDatasets++;
                                    }
                                    if(configOptions === 'true'){
                                        configuration = {
                                            type: configType,
                                            data: {
                                                labels: configLabels,
                                                datasets: datasets
                                            },
                                            options: {
                                                legend: {display: false},
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
                                    } else {
                                        configuration = {
                                            type: configType,
                                            data: {
                                                labels: configLabels,
                                                datasets: datasets
                                            }
                                        };
                                    }
                                    try {
                                        const image = await chartJSNodeCanvas.renderToBuffer(configuration);
                                        await file.createImage(configOutputFile, image);
                                    } catch (error) {
                                        console.error(`Node Chart Exec Failed`);
                                        console.error(`Error: ${error}`);
                                    }
                                } else {
                                    console.error(`Please enter a valid dataset`)
                                }
                            } else {
                                console.error(`Please enter valid labels`)
                            }
                        } else {
                            console.error(`Please enter a valid output file`)
                        }
                    } else {
                        console.error(`Please enter a valid canvas width`)
                    }
                } else {
                    console.error(`Please enter a valid canvas height`)
                }
            } else {
            console.error(`Please enter a valid options`)
            }
        } else {
            console.error(`Please enter a valid chart type`)
        }
        console.log(`Node Chart Exec Completed`);
    }
    return {
        main: main,
    };
}();
module.exports = Index;