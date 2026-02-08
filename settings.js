// credits by Kevin dev
// King Orman 

const config = require('./ormanconfig');

const settings = {
  SESSION_ID: config.SESSION_ID || "", // Session ID from config
  ownername: config.ownername || "K̸I̸N̸G̸ O̸R̸M̸A̸N̸", // Owner name
  botname: config.botname || "𝙾𝚁𝙼𝙰𝙽-𝚇𝙼𝙳", // Bot name
  prefa: config.prefa || ['+', '/', ','], // Command prefixes
  owner: config.owner || ["256704291969@s.whatsapp.net"] // Owner numbers
};

module.exports = settings;

const fs = require('fs');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
  delete require.cache[file];
  require(file);
});