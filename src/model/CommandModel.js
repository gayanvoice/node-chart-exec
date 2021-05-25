let CommandModel =  function (type,labels, dataset, outputFile) {
    this.type = type;
    this.labels = labels;
    this.dataset = dataset;
    this.outputFile = outputFile;
}
module.exports = CommandModel;