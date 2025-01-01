//base by RESA STORE
//recode by RESA STORE
//YouTube: @resastore
//Telegram: t.me/Resastore

/* ● resa store ( mas resa😋 ) di remehkan?? Tentu ini bukan Ancaman ! */

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT : RESASTORE" //ur yt chanel name
global.socialm = "IG : reszxditz" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = 'SEGO ULTRA V7' //ur bot name
global.ownernumber = '62882005545317' //ur owner number
global.ownername = '©resz' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029Vazb04mATRSmPFq5FW1H" //"https://whatsapp.com/channel/0029Vazb04mATRSmPFq5FW1H"
global.wagc = "https://chat.whatsapp.com/FW0hEnhrkxr8tJs3I4sneX" //"https://chat.whatsapp.com/FW0hEnhrkxr8tJs3I4sneX"
global.themeemoji = '☠️'
global.wm = "SEGO ULTRA V7"
global.botscript = 'https://whatsapp.com/channel/0029Vazb04mATRSmPFq5FW1H' //'https://whatsapp.com/channel/0029Vazb04mATRSmPFq5FW1H' //script link
global.packname = "SEGO ULTRA V7"
global.author = "SEGO ULTRA V7"
global.creator = "62882005545317@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["62882005545317"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('https://img101.pixhost.to/images/153/547648844_skyzopedia.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})