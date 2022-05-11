// import path from 'path'
// import pinyin from './pinyin'

// class Suffix {
//   replace (filePath) {
//     const file = path.parse(filePath)
//     const newName = pinyin(file.name) + file.ext
//     return path.join(file.dir, newName)
//   }
// }

// export default Suffix

const path = require('path')
const pinyin = require('./pinyin')

class Suffix {
  replace (filePath) {
    const file = path.parse(filePath)
    const newName = pinyin(file.name) + file.ext
    return path.join(file.dir, newName)
  }
}

module.exoprts = Suffix