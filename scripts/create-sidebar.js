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
    
    const dir = path.resolve(_targetDir, targetDir, subDirName)
    const res = fs.statSync(dir)
    const dirName = getDirName(targetDir)
    console.log('targetDir', targetDir, subDirName)
    
    const subPath = !targetDir ? subDirName : `${targetDir}/${subDirName}`
    // 文件
    if(res.isFile()) {      
        console.log('sugDirName', targetDir, subDirName, subPath)
        const item = {text: dirName , children: [subPath]}
        return item
    }
    // 目录
    const files = fs.readdirSync(dir)
    const dirNameList = files
    dirNameList.forEach(key => {
        const subDir = path.resolve(dir, key)
        
        const res = fs.statSync(subDir)
           
  
        if(res.isDirectory()){
            console.log('subPath', subPath)
            // list.push(getDirStructure(subPath, key, list))
            getDirStructure(subPath, key, list)
            return 
        }
        const name = `/${subPath}/${key}`
        console.log('1', targetDir, name, subDirName)
        if(key === 'README.md' || !/\.md$/.test(key)) return ;
        
        let i = list.findIndex(i => i && i.text === subDirName)
        console.log('iii', i, name)
        if(!targetDir) i = 0;
        if(i === -1) i = list.length || 1
        console.log('iiia', list, i, name)
        list[i] = list[i] || {
            text: subDirName,
            children: []
        }
        list[i].children.push(name)
        // if (/\.md$/.test(targetDir)) {
        //     console.log('1', targetDir, name, subDirName)
            
        // }else {
        //     console.log('2', targetDir, name, subDirName)
            
        //     item = item || {
        //         text: subDirName,
        //         children: []
        //     }
        //     item.children.push(name)
        // } 
    })
    // obj.children.sort((a,b)=>{return a - b});
    // return obj
}

function genSidebar(targetDir, sidebarPath, target = {}) {
    // 初始化分级目录，其他级别为子数组
    const files = fs.readdirSync(targetDir)
    const dirNameList = files.filter(item => item !== 'README.md' && item.indexOf('.') !== 0)
    dirNameList.forEach(key => {     
        const children = []
        getDirStructure('', key, children)  
        target[`/${encodeURI(key)}/`] = children
    })
    
    const content = `module.exports = ${JSON.stringify(target, undefined, 2)}`;
    // console.log(content)
    fs.writeFile(sidebarPath, content, { encoding: 'utf8' }, err => {console.log(err);});     

}

genSidebar(_targetDir, _sidebarPath);

module.exports = genSidebar