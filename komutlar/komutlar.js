const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://www.google.com/search?q=johnny+sins&rlz=1C1ONGR_trDE978DE978&sxsrf=AOaemvKuqwEB2Uvq6m-3N4CWivhqPHV3cw:1638548340237&tbm=isch&source=iu&ictx=1&fir=qZ8MAzjU-TdlfM%252Ccl8ygZ9waqS0CM%252C%252Fm%252F0k28_dw&vet=1&usg=AI4_-kSCQHeGZ7Q9L_EtoW5JVAhzQw5qsw&sa=X&ved=2ahUKEwjdipGehMj0AhWsRfEDHfeQDjQQ_B16BAgyEAI#imgrc=qZ8MAzjU-TdlfM",
          color: 0xD97634,
		  description: "Ula johnny aga seviliyorsun <3"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sins-aga',
  description: 'kedileri gösterir.',
  usage: 'sins-aga'
};
