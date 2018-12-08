const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", e => {
	setInterval (function (){
	  var statusrand  = Math.floor(Math.random() * 8 + 1);
	  if (statusrand === 1) {
		bot.user.setActivity(`Tutaj swieta trwaja caly rok!`);   
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 2) {
		bot.user.setActivity(`Domyslny prefix to !`);
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 3) {
		bot.user.setActivity(`Moc prezentow...`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 4) {
		bot.user.setActivity(`Witaj Drogie Dziecko!`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 5) {
		bot.user.setActivity(`Jak mija Ci dzien/noc?`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 6) {
		bot.user.setActivity(`Gdzie prezenty!?`); 
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand); 
	  }
	  if (statusrand === 7) {
		bot.user.setActivity(`Przygotuj komin!`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 8) {
		bot.user.setActivity(`Ubierz choinke!`);  
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
