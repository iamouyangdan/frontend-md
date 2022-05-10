const fs = require('fs')
const path = require('path')
const { mkdirSync } = require('./utils')
// 排序
function sort(sourceDir, target, sortFn) {

}
function genNavbar(sourceDir, targetPath, target = [], sortFn) {
    if(!sourceDir) throw new Error('sourceDir参数不允许为空')
    if(!targetPath) throw new Error('targetPath参数不允许为空')
    mkdirSync(targetPath)
    // 初始化分级目录，其他级别为子数组
    const files = fs.readdirSync(sourceDir)
    const dirNameList = files.filter(item => item !== 'README.md' && item.indexOf('.') !== 0)
    dirNameList.forEach(key => {   
        // 初始化第一级为数组的第一项，参考官方文档   
        target.push({
            link: `/${key}/`,
            text: key
        })
    })
    sort(sourceDir, target, sortFn)
    // 写入文件
    const content = `module.exports = ${JSON.stringify(target, undefined, 2)}`;
    fs.writeFile(targetPath, content, { encoding: 'utf8' }, err => {console.log(err);});     
}

module.exports = genNavbar