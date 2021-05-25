let CommandModel =  function (type, height, width, labels, dataset, outputFile) {
    this.type = type;
    this.height = height;
    this.width = width;
    this.labels = labels;
    this.dataset = dataset;
    this.outputFile = outputFile;
}
module.exports = CommandModel;