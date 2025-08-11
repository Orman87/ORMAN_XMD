
const fs = require('fs')
const chalk = require('chalk')





// setting bot
global.owner = "256704291969"
global.ownername = "King Orman"
global.botname = "ORMAN-XMD"
global.author = "256704291969"
global.xprefix = '.'
global.autostatus = true 
global.Public = true 







































global.mess = {
    owner: '`command reserved for owner only<\>`',
 prem: '`command reserved for premium only<\>`',
    admin: '`command reserved for admins only<\>`',
    group: '`feature for group only<\>`',
    done: '`Done ✓`',
    error: 'Error !',
    success: 'Succes •'
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
