const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", e => {
	setInterval (function (){
	  var statusrand  = Math.floor(Math.random() * 8 + 1);
	  if (statusrand === 1) {
		bot.user.setActivity(`Prezenty!`);   
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 2) {
		bot.user.setActivity(`Swieta!`);
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 3) {
		bot.user.setActivity(`Mikolaj Swiety!`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 4) {
		bot.user.setActivity(`Pani Mikolajkowa`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 5) {
		bot.user.setActivity(`Haayy!`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 6) {
		bot.user.setActivity(`Gdzie prezenty!?`); 
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand); 
	  }
	  if (statusrand === 7) {
		bot.user.setActivity(`Choinka!`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 8) {
		bot.user.setActivity(`Swiety Swiety!`);  
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
	
	if(cmd === `${prefix}help`){
		let embed = new Discord.RichEmbed()
		.setColor("ORANGE")
		.setAuthor("POMOC BOTA")
		.setDescription("`Aktualnie brak komend innych niz !help w tym bocie ;(`")
		message.channel.send(embed);
		//message.channel.send("**POMOC BOTA:**\n`Aktualnie brak komend innych niz !help w tym bocie ;(`");
	}
  });
  
  bot.login(process.env.TOKEN);
