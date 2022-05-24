
function findMaxCountLetter(article) {
    if(typeof article !== 'string') throw new Error('请传入字符串')
    let newArticle = article.trim()
    let match = newArticle.match(/[a-zA-Z]/ig)
    let wordTypes = [...new Set(match)]
    let wordLength, word, max = 0, maxWord = []

    for(let i = 0; i < wordTypes.length; i++) {
        word = new RegExp('' + wordTypes[i] + '', 'g')
        wordLength = article.match(word).length
        if(wordLength === max) {
            max = wordLength
            maxWord.push(wordTypes[i])
        }
        else if(wordLength > max) {
            max = wordLength
            maxWord = []
            maxWord[0] = wordTypes[i]
        }
    }
    return {
        word: maxWord[0], 
        maxWord, 
        max
    }
}

findMaxCountLetter('abbaaaccdcccc')