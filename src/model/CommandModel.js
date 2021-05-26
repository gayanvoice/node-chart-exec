let CommandModel =  function (type, options, height, width, labels, dataset, outputFile) {
    this.type = type;
    this.options = options;
    this.height = height;
    this.width = width;
    this.labels = labels;
    this.dataset = dataset;
    this.outputFile = outputFile;
}
module.exports = CommandModel;