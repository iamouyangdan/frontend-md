const fs = require('fs')
const path = require('path')

const docsDir = '../docs'

const _targetDir = path.resolve(__dirname, docsDir)

const _sidebarPath = path.resolve(_targetDir, '.vuepress/config/sidebar/index.js')

console.log('dirname', __dirname, _targetDir)

// 递归生成目录结构
function genDirStructure(rootDir, targetDir, subDirName, list = []) {
    // 搜索当前目录为所在数组的第几项，若未搜索到，说明为新的目录，此时数组新建一项用来保存新目录
    let i = list.findIndex(i => i.text === subDirName)   
    if(i === -1) i = list.length
    list[i] = list[i] || {
        text: subDirName,
        children: []
    }
    // 读取目录
    const dir = path.resolve(rootDir, targetDir, subDirName)
    const files = fs.readdirSync(dir)
    files.forEach(key => {
        // targetDir为空时表示为第一级目录
        const subPath = !targetDir ? subDirName : `${targetDir}/${subDirName}`
        // 判断是否为目录，若为目录，需要递归处理
        const subDir = path.resolve(dir, key)     
        const res = fs.statSync(subDir)            
        // 当前路径为目录时，递归处理数组
        if(res.isDirectory()){
            genDirStructure(rootDir, subPath, key, list)
            return 
        }    
        // 过滤README.md和非md文件
        if(key === 'README.md' || !/\.md$/.test(key)) return ;
        
        const name = `/${subPath}/${key}`
        list[i].children.push(name)
    })
}


// 对二级菜单项列表排序
function sortSidebar(rootDir, target = {}, sortFn) {
    // 默认依次对sort、name、createTime、updateTime多字段按从小到大的顺序排序
    const sortList = (a, b) => {
        if(sortFn) return sortFn(a, b)
        if (a.sort !== b.sort) return a.sort < b.sort ? 1 : -1
        if (a.name !== b.name) return a.name < b.name ? 1 : -1
        else if (a.createTime !== b.createTime) return a.createTime < b.createTime ? 1 : -1
        else if (a.updateTime !== b.updateTime) return a.updateTime < b.updateTime ? 1 : -1
    }
    Object.keys(target).forEach(key => {
        const items = target[key] || []
        items.forEach(item => {
            const sortRule = []
            item.children.forEach(fileUrl => {
                const filePath = path.resolve(rootDir, '.' + fileUrl)
                const content = fs.readFileSync(filePath, { encoding: 'utf8' })                
                const fileStat = fs.statSync(filePath)
                const rule = {url: fileUrl, name: fileUrl.slice(fileUrl.lastIndexOf('/') + 1, fileUrl.length),  sort: 0, createTime: fileStat.birthtime, updateTime: fileStat.mtime}
                const res = content.match(/---(\n|\s)*autoSort:\s*(-?[0-9]*)(\n|\s)*---/)
                if(res) {
                    console.log('sort', Number(res[2]))
                    rule.sort = Number(res[2])
                }
                sortRule.push(rule)
            })
            sortRule.sort(sortList)
            item.children = sortRule.map(i => i.url)
        })
    })
}

function genSidebar(targetDir, sidebarPath, target = {}) {
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

genSidebar(_targetDir, _sidebarPath);

module.exports = genSidebar