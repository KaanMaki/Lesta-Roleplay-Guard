const Discord = require('discord.js');

exports.run = async(client, message, args) => {


    const restart = new Discord.MessageEmbed()
    .setDescription('SUNUCUYA RESTART GELIYOR AKTIF OLDUGU ZAMAN AKTIF VERILECEKTIR.')
    .setImage(`https://cdn.discordapp.com/attachments/916645462143041546/916805023508361247/indir.png`)
    .setFooter(`${message.author.username} Tarafından Kullanıldı.`)
    .setTimestamp()
    .setColor('RANDOM')
    message.channel.send(restart)
    message.channel.send(`@everyone`).then(x => x.delete({timeout: 1500}));


}

exports.conf = {enabled: true, guildOnly: true, aliases: ["restart"]};
exports.help = {name: 'restart'};