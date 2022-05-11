const pinyin  = require('pinyin')
const fs = require('fs')
const path = require('path')

const docsDir = '../docs'

const _targetDir = path.resolve(__dirname, docsDir)

const _sidebarPath = path.resolve(_targetDir, '.vuepress/config/sidebar/index.js')

function start(targetDir, target = {}) {
    // 初始化分级目录，其他级别为子数组
    const files = fs.readdirSync(targetDir)
    const dirNameList = files.filter(item => item !== 'README.md' && item.indexOf('.') !== 0)
    dirNameList.forEach(key => {   
        // 初始化第一级为数组的第一项，参考官方文档  
        const children = [{ text: key, children: [] }]
        genDirStructure(targetDir, '', key, children)  
        target[`/${encodeURI(key)}/`] = children
    })
    sortSidebar(targetDir, target)
    const content = `module.exports = ${JSON.stringify(target, undefined, 2)}`;
    fs.writeFile(sidebarPath, content, { encoding: 'utf8' }, err => {console.log(err);});     
}

start(_targetDir)