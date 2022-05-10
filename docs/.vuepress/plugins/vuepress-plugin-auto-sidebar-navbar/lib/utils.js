const fs = require('fs')
const path = require('path')
const mkdirSync = (url) => {
    console.log('url', url)       
    const dirPath = path.resolve(url, '..')
   
    if (!fs.existsSync(dirPath)) {
        try {
            fs.mkdirSync(dirPath);
        } catch(e) {
            mkdirSync(dirPath)
        }    
    }
}
module.exports = {
    mkdirSync,
}