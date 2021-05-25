const core = require('@actions/core');
const fs = require('fs-extra')
let file = (function () {
    let createImage = async function (fileName, image) {
        try {
            await fs.outputFile(fileName, image)
            core.info( `Image file created at ${fileName}`)
        } catch (error) {
            core.info( `Image file created at ${fileName}`)
        }
    }
    return {
        createImage: createImage,
    };
})();
module.exports = file;