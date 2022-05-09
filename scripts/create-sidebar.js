const fs = require('fs')
const path = require('path')

const docsDir = '../docs'

const _targetDir = path.resolve(__dirname, docsDir)

const _sidebarPath = path.resolve(_targetDir, '.vuepress/config/sidebar/index.js')

console.log('dirname', __dirname, _targetDir)

function getDirName(targetDir) {
    return targetDir.slice(targetDir.lastIndexOf('/') + 1, targetDir.length)
}

function getDirStructure(targetDir, subDirName, list = []) {
    console.log(targetDir, subDirName)
    const dir = path.resolve(_targetDir, targetDir, subDirName)
    const res = fs.statSync(dir)
    const dirName = getDirName(targetDir)

    
    const subPath = !targetDir ? subDirName : `./${targetDir}/${subDirName}`
    // 文件
    if(res.isFile()) {      
        return {text: dirName , children: [subPath]}
    }
    // 目录
    const files = fs.readdirSync(dir)
    const dirNameList = files
    const obj = {
        text: subDirName,
        children: []
    }
    dirNameList.forEach(key => {
        const subDir = path.resolve(dir, key)
        
        const res = fs.statSync(subDir)
           
  
        if(res.isDirectory()){
            console.log('subPath', subPath)
            list.push(getDirStructure(subPath, key, list))
            return 
        }
        const name = `./${subPath}/${key}`
        if (targetDir) {
            obj.children.push(name)
        }else {
            list[0] = list[0] || {
                text: subDirName,
                children: []
            }
            list[0].children.push(name)
        } 
    })
    obj.children.sort((a,b)=>{return a - b});
    // target.push(obj)
    return obj
}

function genSidebar(targetDir, sidebarPath, target = {}) {
    // 初始化分级目录，其他级别为子数组
    const files = fs.readdirSync(targetDir)
    const dirNameList = files.filter(item => item.indexOf('.') !== 0)
    dirNameList.forEach(key => {     
        if(key === 'README.md') return true
        const children = []
        getDirStructure('', key, children)  
        target[`/${encodeURI(key)}/`] = children
    })
    
    const content = `module.exports = ${JSON.stringify(target, undefined, 2)}`;
    console.log(content)
    fs.writeFile(sidebarPath, content, { encoding: 'utf8' }, err => {console.log(err);});     

}

genSidebar(_targetDir, _sidebarPath);

module.exports = genSidebar