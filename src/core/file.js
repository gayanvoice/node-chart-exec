const fs = require('fs-extra')
let file = (function () {
    let createImage = async function (fileName, image) {
        try {
            await fs.outputFile(fileName, image)
            console.log( `Image file created at ${fileName}`)
        } catch (error) {
            console.error( `Image file created at ${fileName}`)
        }
    }
    return {
        createImage: createImage,
    };
})();
module.exports = file;