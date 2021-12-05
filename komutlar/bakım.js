const Discord = require('discord.js')

exports.run = async(client, message, args) => {


const bakım = new Discord.MessageEmbed()
.setDescription('SUNUCU BAKIMDA AKTIF OLDUGU ZAMAN AKTIF VERILECEKTIR.')
.setImage(`https://cdn.discordapp.com/attachments/916645462143041546/916818272295469136/unknown.png`)
.setFooter(`${message.author.username} Tarafından Kullanıldı.`)
.setTimestamp()
.setColor('RANDOM')
 message.channel.send(bakım)
 message.channel.send(`@everyone`).then(x => x.delete({timeout: 1500}));


}
exports.conf = {enabled: true, guildOnly: true, aliases: ["bakım"]};
exports.help = {name: 'bakım'};