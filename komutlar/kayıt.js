const Discord = require('discord.js');


exports.run = async(client, message, args) => {
	message.delete({ timeout: 1 });
if( !message.member.roles.cache.has('911178071980261400') ) return message.channel.send(`**Bu komutu sadece kayıt bekleyenler kullanabilir!**`).then(msg => {
				msg.delete({ timeout: 5000 });
			})

return message.channel.send(`${message.author}, Kayıt ekibi sizinle ilgilenecektir. <@&911178072143851577>`,
	   new Discord.MessageEmbed()
	   .setTitle("**Arkadaşlarını Davet Et**")
	   .setAuthor("Hed Gun Roleplay")
	   .setColor('#FF0000')
	  .setFooter(`${message.author.username} tarafından gönderildi!`, message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
	  .setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .setImage("https://cdn.discordapp.com/attachments/916645462143041546/916818272295469136/unknown.png")
	  .setThumbnail('https://cdn.discordapp.com/attachments/916645462143041546/916818272295469136/unknown.png')
	  .setTimestamp()
	  .setURL("https://discord.gg/mZyJxGqxaW")
	  .addField(`Merhaba, ${message.author.username}! Kayıt bekleme talebini aldık, hemen ilgileniyoruz. Sunucumuza hoş geldin.`,"V1.0"))
	  
}
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayit"],
  kategori : "kayıt"
};
 
exports.help = {
  name: 'kayıt',
  description: 'Tüm komutları gösterir.',
  usage: 'kayıt'
};