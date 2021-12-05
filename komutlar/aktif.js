const Discord = require('discord.js');

exports.run = async(client,message,args) => {
    message.channel.send(new Discord.MessageEmbed()
    .setTitle("Sunucu Aktif!")
    .setImage("https://cdn.discordapp.com/attachments/916645462143041546/916818272295469136/unknown.png")
	.setThumbnail('https://cdn.discordapp.com/attachments/916645462143041546/916818272295469136/unknown.png')
    .setDescription("İP:connect 45.82.122.233. TS:"))
  message.channel.send(`@everyone`).then(x => x.delete({timeout: 1500}));
}

exports.conf={
    enabled: true,
    guildOnly:false,
    aliases:[],
    kategori:""
}

exports.help = {
    name : "aktif",
    description:"açıklama",
    usage:"aktif"
}
