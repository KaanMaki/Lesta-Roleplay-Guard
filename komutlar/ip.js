const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    const ip = new Discord.MessageEmbed()
    .setDescription(' Sunucu IP Adresi : connect 195.85.205.84\n Sunucu TS3 IP : ')
    .setImage(`https://cdn.discordapp.com/attachments/916645462143041546/916805023508361247/indir.png`)
    .setFooter(`${message.author.username} Tarafından Kullanıldı.`)
    .setTimestamp()
    .setColor('RANDOM')
    message.channel.send(ip).then(x => x.delete({timeout: 51000}));

}

exports.conf = {enabled: true, guildOnly: true, aliases: ["ip","ıp"]};
exports.help = {name: 'ts3'};
