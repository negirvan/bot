const express = require("express") 
const app = express()

app.get("/", (req, res) => {
  res.send("DeviBot Is Ready!")
})

app.listen(3000, () => {
  console.log("DeviBot")
})


const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db'); 
const probot = require('probot-tax'); 
const figlet = require("figlet");
const ms = require('ms'); 
const moment = require('moment');
const client = new Discord.Client();


const {
    TOKEN, 
    prefix, 
    devs, 
    color
} = require('./config'); 

const {
   on, 
   off, 
   replit, 
   glitch, 
   help, 
   github, 
   cmds, 
   codes
} = require('./emojis'); 

client.on("ready", () => {
console.log("ــــــــــــــــــــــــــــــــــــــــــــــ") 
  console.log(`Logged In ${client.user.tag}`) 
  console.log("ــــــــــــــــــــــــــــــــــــــــــــــ")
  console.log(`Channels : ${client.channels.cache.size}`) 
  console.log(`Servers : ${client.guilds.cache.size}`) 
  client.user.setStatus("online"); 
  client.user.setUsername("DeviBot ✨") 
  const status = [
 `${prefix}help - Manage Your Server`,
 `${client.users.cache.size} User - ${client.guilds.cache.size} Server`, 
 ]
 setInterval(() => {
 client.user.setActivity(status[Math.floor(Math.random() *
             status.length)], {type : "PLAYING"})
 }, 5000)
const own = client.users.cache.get('896738429776330822') 
own.send(`**DeviBot Is Ready!**`) 
})



client.on("guildMemberAdd", member => {
   const wel = client.users.cache.get(`${member.id}`) 
   wel.send(`**Welcome To ${member.guild.name} 
DeviBot Support : https://discord.gg/Rj4EYGVyUH
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
مرحبا بك في ${member.guild.name}
سيرفر الـ دعم الفني للبوت : https://discord.gg/Rj4EYGVyUH**`) 
}) 


const disbut = require('discord-buttons');
disbut(client);
client.on('message', message => {
    if (message.content.startsWith('$links')) {
    if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 

 let button = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji("802330119079067648")  
        .setLabel('سيرفر الدعم - Support Server')
        .setURL('https://discord.gg/sgdgepTvTs');


 let button1 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('دعوة البوت - Bot Invite')
         .setEmoji("916683028636532838") 
        .setURL('https://discord.com/api/oauth2/authorize?client_id=900137391468183552&permissions=1546972374&scope=bot');



        let button2 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('التصويت - Vote')
        .setEmoji("778416296630157333")  
        .setURL('https://top.gg/bot/900137391468183552/vote');
        let embed = new Discord.MessageEmbed() 
      .setTitle("**Link Command**") 
      .setColor(color) 
     .setFooter(`Requested By ${message.author.tag}`) 
      .setDescription(`> **لدعوة البوت أضغط علي : __[Bot Invite](https://discord.com/api/oauth2/authorize?client_id=900137391468183552&permissions=1546972374&scope=bot)__**
-
> **لدخول سيرفر السبورت أضغط علي : __[Support Server](https://discord.gg/sgdgepTvTs)__**
-
 **لعمل تصويت للبوت أضغط علي : __[Vote](https://top.gg/bot/900137391468183552/vote)__**`) 
   message.channel.send(embed, {
            buttons: [button, button1, button2]
        });


    }

}) 





client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();
let user = message.mentions.members.first() || client.users.cache.find(u => u.id === args[0])
  let member = message.guild.member(user)
if(command === "blacklist") {
    if(!devs.includes(message.author.id))return;
  if(!user) return message.channel.send(`**I Can't Find The User**`)
  if(db.has(`u`,member.id)) return message.channel.send('**This Member Is Already Blacklisted**')
  db.set(`u`,member.id)
  message.channel.send(`**Member Added To Blacklist \n User : <@!${member.id}>**`)
}
if(command === "remove-blacklist") {
    if(!devs.includes(message.author.id))return;
    if(!user) return message.channel.send(`**I Can't Find The User**`)
    if(!db.has(`u`,member.id)) return message.channel.send('**This Member Is Not Blacklisted**')
    db.delete(`u`,member.id)
    message.channel.send(`**Member Removed From Blacklist \n User : <@!${member.id}>**`)
}
if(command === 'delete-all') {
    if(!devs.includes(message.author.id))return;
    db.delete('u')
    message.channel.send('**Removed All Blacklists**')
}
}); 


client.on("guildCreate", guild => {
  let embed = new Discord.MessageEmbed() 
     .setTitle(`${guild.name}`)
     .setDescription(`> **شكرا علي أضافة البوت لسيرفرك !**
> **بادئة البوت : \`$\`**
> **لأظهار أوامري أكتب : \`$help\`** `)  
  guild.owner.send(embed) 
}) 



client.on("message", message => {
 if (message.content === prefix + "help") {  
 if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
  let button = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji("802330119079067648")  
        .setLabel('سيرفر الدعم - Support Server')
        .setURL('https://discord.gg/sgdgepTvTs');


 let button1 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('دعوة البوت - Bot Invite')
         .setEmoji("916683028636532838")  
        .setURL('https://discord.com/api/oauth2/authorize?client_id=900137391468183552&permissions=1546972374&scope=bot');



        let button2 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('التصويت - Vote')
        .setEmoji("778416296630157333")  
        .setURL('https://top.gg/bot/900137391468183552/vote');
 
  let embed = new Discord.MessageEmbed() 
    .setTitle("**Help Command**") 
    .addField(`> **__🌎・الأوامـر الـعـامـة__**`, '→ $general') 
    .addField(`> **⚙️ __الأوامـر الأداريـة__**`, '→ $admin') 
    .addField(`> **__🖥 أوامـر الألعـاب__**`, '→ $fun') 
     .addField(`> **__🎵 أوامـر الـمـوسـيـقـي__** `, '→ $music') 
     .setColor(color) 
     .setFooter(`Requested By ${message.author.tag}`) 
      message.react("✅")
     message.author.send(embed, {
        buttons: [button, button1, button2] 
        });


    }

})  



client.on('message', message => {
    if (message.content.startsWith(prefix + "kick")) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return
       if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
        let user = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1])
        if (!user) return message.channel.send(`**${off} - لا أستطيع أيجاد العضو**`)
      
    message.guild.member(user).kick()
        message.channel.send("**✅ - تم طرد العضو من الـ سيرفر**")
    }
}); //ban


client.on('message', message =>{
  let args = message.content.split(' ');
if(args[0] === `${prefix}emoji`){
let findEmoji = args[1];

if(!findEmoji || findEmoji === '') return  message.channel.send(`**يرجي كتابة الأيموجي**`);

let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);

if(isNaN(EmojiId)) return message.channel.send(`**لا أستطيع أيجاد الأيموجي**`);

let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;

let devi = new Discord.MessageEmbed()
.setColor(color)
  .setTitle("**Emoji Command**") 
.setDescription(`[${findEmoji} Link](${EmojiURL})`)
.setImage(`${EmojiURL}`)  
message.channel.send(devi);

};
}); 




client.on("message", devi => {
 if (devi.content === prefix + "ping") {
 if(db.has("u", devi.author.id)) return devi.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
     let embed = new Discord.MessageEmbed() 
        .setColor(color) 
        .setTitle(":ping_pong: - Pong!") 
        .addField("**My Ping Is :**", `**${client.ws.ping}ms**`)
        .setFooter(`Requested By ${devi.author.tag}`) 
     devi.channel.send(embed)
} 
 }); 


client.on('guildCreate', async guild => {
  const addC = client.channels.cache.get('916307727414878218') 
   addC.send(`__**New Guild!**__ \n Server Name : ${guild.name} \n Server ID : ${guild.id} \n Members : ${guild.memberCount}`)  
}) 





 
client.on("message", async m => {
 if (m.content === prefix + "share") {
  const invite = await m.channel.createInvite(
        {
          maxAge: 0,
          maxUses: 0
        })
 if (!m.guild) return; 
 if (!m.member.hasPermission('ADMINISTRATOR')) return; 
   let args = m.content.split(" ").slice(1).join(" ")
const shareC = client.channels.cache.get('916063073511567440') 
    shareC.send(`${invite} \n By : <@!${m.author.id}>`) 
    m.channel.send(`**تم نشر سيرفرك**`) 
} 
}); 



client.on("message", devi => {
 if (devi.content === prefix + "devs") {
 if (!devi.guild) return; 
 if(db.has("u", devi.author.id)) return devi.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
  let embed = new Discord.MessageEmbed() 
        .setTitle("**Devs Command**") 
.setColor(color) 
        .addField(`**مطورين الـ بوت :**`, '<@!794656951627415553> , <@!896738429776330822> , <@!829747685346377799>')
      .setFooter(`Requested By ${devi.author.tag}`) 
   devi.channel.send(embed) 
} 
}); 


client.on("message", async m => {
 if (m.content === prefix + "رابط") {
 if (!m.guild) return; 
 let invite = await m.channel.createInvite(
        {
          maxAge: 0,
          maxUses: 0
        })
  m.author.send(`> **المدة : دائم**
> **الرابط : ${invite}**`) 
  m.react("✅") 
} 
}); 


client.on('message', message => {
  if (message.author.bot) return;
  let args = message.content.split(" ").slice(1).join(" ")
  if (message.content.startsWith(prefix + "say-noembed")) {
  if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
    message.delete();
      message.channel.send(args)
  }
}); 


client.on('message', message => {
  if (message.author.bot) return;
  let args = message.content.split(" ").slice(1).join(" ")
  if (message.content.startsWith(prefix + "say-embed")) {
  if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
   var embed = new Discord.MessageEmbed()
   .setColor(color) 
   .setTitle("Say Command") 
   .setDescription(args) 
      message.channel.send(embed)
      message.delete()
  }
}); 



client.on('message', (msg) => {
  var word = [
    "**Your Number Is 34**",
    "**Your Number Is 88**",
    "**Your Number Is 2**",
    "**Your Number Is 56**",
    "**Your Number Is 8**",
    "**Your Number Is 4**",
    "**Your Number Is 1**"
  ]
  if (msg.author.bot) return
  if (msg.content === prefix + "roll") {
  if(db.has("u", msg.author.id)) return msg.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
    var result = word[Math.floor(Math.random() * word.length)];
    msg.reply(result)
  }
})



client.on('message', flig => {
if (flig.content.startsWith(prefix + 'tag')) {
    let args = flig.content.split(" ").slice(1);
if(!args[0]) return flig.channel.send(`**لا أستطيع العثور علي الـ كلمة !**`);  

    figlet(args.join(" "), (err, shark) => {
              flig.channel.send(`\`\`\`${shark}\`\`\``)
           })
}
});



client.on("message", m => {
 if (!m.guild) return; 
 if (m.content === prefix + "premium") {
 if(db.has("u", m.author.id)) return m.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
    let embed = new Discord.MessageEmbed() 
      .setColor(color) 
      .setTitle("**Premium Command**") 
      .setDescription("**__لشراء الـ بريميوم توجه لسيرفر السبورت وأفتح تكت__**")
   .setFooter(`Requested By ${m.author.tag}`)  
 m.channel.send(embed) 
} 
}); 




client.on("message", m => { 
if (m.content === `<@${client.user.id}>`) {
    let embed = new Discord.MessageEmbed() 
      .setColor(color) 
      .setTitle(`**Mention Command**`) 
      .setDescription(`**مرحبا ، الـ بادئة الخاصة بالبوت هي \`$\`
أكتب \`$links\` لدعوتي في سيرفرك !**`) 
    .setFooter(`Requested By ${m.author.tag}`)  
    m.channel.send(embed) 
} 
}); 





client.on('message', message => {
  if(message.content.startsWith(prefix + "boost")){
if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
    
 if(message.author.bot || !message.guild) return message.reply("this command for server only")
 
    
    let level = message.guild.premiumTier === 0 ? "No Level" : `${message.guild.premiumTier}`;
 
    let boost = message.guild.premiumSubscriptionCount;
    
    
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`<a:YG_82:893111669461487657> Boost Command`)

.addField("Boost", `${boost}`)
.addField("Level", `${level}`)
.setColor(color)  
 .setFooter(`Requested By ${message.author.tag}`)  
 message.channel.send(embed)
 
  }
});




client.on("message", msg => {
 if (!msg.guild) return;
 if (msg.content === prefix + "profile") {
 if(db.has("u", msg.author.id)) return msg.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 

      let embed = new Discord.MessageEmbed() 
     .setTitle("**Profile Command**") 
     .setColor(color) 
     .setDescription(`> **المنشن : <@!${msg.author.id}>**
__-__
> **الأسم : ${msg.author.tag}**
__-__
> **الأيدي : ${msg.author.id}**
__-__
> **البريميوم : null** `) 
   .setFooter(`Requested By ${msg.author.tag}`)  
   msg.channel.send(embed) 
} 
 }); 




const credits = JSON.parse(fs.readFileSync('./credits.json'));
var time = require('./time.json');
client.on('message', async message => {
	if (message.author.bot || message.channel.type === 'dm') return;
	let args = message.content.split(' ');
	let author = message.author.id;
	if (!credits[author])
		credits[author] = {
			credits: 0
		};
	fs.writeFileSync('./credits.json', JSON.stringify(credits, null, 4));
	if (args[0].toLowerCase() == `${prefix}credits`) {
		const mention = message.mentions.users.first() || message.author;
		const mentionn = message.mentions.users.first();
		if (!args[2]) {
			message.channel.send(
				`**الكريدت الخاص بـ ${mention.username} هو : \`$${
					credits[mention.id].credits
				}\`**`
			);
		} else if (mentionn && args[2]) {
			if (isNaN(args[2]) || [',', '.'].includes(args[2]))
				return message.channel.send(`**:x: | خطا **`);
 
			if (args[2] < 1) return message.channel.send(`**:x: | خطا**`);
			if (mention.bot) return message.channel.send(`**:x: | خطا**`);
			if (mentionn.id === message.author.id)
				return message.channel.send(`**:x: | خطا**`);
			if (args[2] > credits[author].credits)
				return message.channel.send(
					`**:x: | Error ,<a:no:748385723262173216> انت لا تمتلك رصيد**`
				);
			if (args[2].includes('-')) return message.channel.send(`**:x: | خطا**`);
			let resulting =
				parseInt(args[2]) == 1
					? parseInt(args[2])
					: Math.floor(args[2] - args[2] * (5 / 100));
			let tax =
				parseInt(args[2]) == 1
					? parseInt(args[2])
					: Math.floor(args[2] * (5 / 100));
			let first = Math.floor(Math.random() * 9);
			let second = Math.floor(Math.random() * 9);
			let third = Math.floor(Math.random() * 9);
			let fourth = Math.floor(Math.random() * 9);
			let num = `${first}${second}${third}${fourth}`;
			let Canvas = require('canvas');
			let canvas = Canvas.createCanvas(108, 40);
			let ctx = canvas.getContext('2d');
			const background = await Canvas.loadImage(
				'https://cdn.discordapp.com/attachments/608278049091223552/617791172810899456/hmmm.png'
			);
			ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
			ctx.font = '20px Arial Bold';
			ctx.fontSize = '20px';
			ctx.fillStyle = '#ffffff';
			message.channel
				.send(
					`**${
						message.author.username
					}, Transfer Fees: \`${tax}\`, Amount: \`$${resulting.toLocaleString()}\`**
type these numbers to confirm: `
				)
				.then(async essss => {
					message.channel.send(`\`${num}\``).then(m => {
						message.channel
							.awaitMessages(r => r.author.id === message.author.id, {
								max: 1,
								time: 20000,
								errors: ['time']
							})
							.then(collected => {
								if (collected.first().content === num) {
									essss.delete();
									message.channel.send(
										`**:moneybag: | ${
											message.author.username
										}, Done Trans \`$${resulting.toLocaleString()}\` To ${mentionn}**`
									);
									mention.send(
										`**:money_with_wings: | Transfer Receipt **\`\`\`You Have Received \`$${resulting.toLocaleString()}\` From User ${
											message.author.username
										}; (ID (${message.author.id})\`\`\``
									);
									m.delete();
									credits[author].credits += Math.floor(
										-resulting.toLocaleString()
									);
									credits[mentionn.id].credits += Math.floor(
										+resulting.toLocaleString()
									);
									fs.writeFileSync(
										'./credits.json',
										JSON.stringify(credits, null, 4)
									);
								} else {
									m.delete();
									essss.delete();
								}
							});
					});
				});
		} else {
			message.channel.send(
				`**:x: | Error , Please Command True Ex: \`${prefix}credits [MentionUser] [Balance]\`**`
			);
		}
	}
	if (args[0].toLowerCase() === `${prefix}daily`) {
		let cooldown = 8.64e7;
		let Daily = time[message.author.id];
		if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
			let times = cooldown - (Date.now() - Daily);
			message.channel.send(
				`**:stopwatch: |  ${
					message.author.username
				}, your daily :dollar: credits refreshes in ${pretty(times, {
					verbose: true
				})}.**`
			);
			fs.writeFile('./time.json', JSON.stringify(time), function(e) {
				if (e) throw e;
			});
		} else {
			let ammount = (300,
			500,
			100,
			200,
			120,
			150,
			350,
			320,
			220,
			250,
			700,
			737);
			credits[author].credits += ammount;
			time[message.author.id] = Date.now();
			message.channel.send(
				`**مكافأتك اليومية : ${ammount} **`
			);
			fs.writeFile('./credits.json', JSON.stringify(credits), function(e) {
				if (e) throw e;
			});
		}
	}
});




                






client.on("message", devi => {
 if (devi.content === prefix + "id") { 
 if(db.has("u", devi.author.id)) return devi.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 

    let embed = new Discord.MessageEmbed()
       .setColor(color) 
       .setTitle("**ID Command**") 
       .addField('**أيدي الـ مستخدم : **', `${devi.author.id}`)  
        .addField('**أيدي الـ سيرفر : **', `${devi.guild.id}`) 
   .setFooter(`Requested By ${devi.author.tag}`)  
     devi.channel.send(embed) 
} 
 }); 








client.on("message", russi => {
  if (russi.content === prefix + "server") {
if(db.has("u", russi.author.id)) return russi.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 

    let embed = new Discord.MessageEmbed()
    .setTitle(`Server Command`)
    .setThumbnail(client.user.avatarURL())
    .setColor(color)
    .setFooter(`Requested | ${russi.author.tag}`, russi.author.avatarURL())
    .addField('> :star: أيدي السيرفر :', `${russi.guild.id}`)
    .addField('> :crown: أونر السيرفر :', `${russi.guild.owner}`)
    .addField('> :calendar: صنع في : ', `${russi.guild.createdAt.toLocaleString()}`)
    .addField('> :busts_in_silhouette: الأعضاء : ', `${russi.guild.memberCount}`)
    .addField('> :speech_balloon: الرومات : ', `${russi.guild.channels.cache.size}`)
    .addField('> :earth_americas: الحماية : ', `${russi.guild.region}`)
    .setTimestamp()
.setFooter(`Requested By ${russi.author.tag}`)  
    russi.channel.send(embed);
  }
});



















client.on('message', message => {
    if (message.content.startsWith(prefix + "nuke")) {
        if (!message.member.hasPermission("MAMAGE_SERVER")) return
        if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
        let user = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1])
        if (!user) return 
      
 message.channel.send(`**😂 - تم تفجير العضو**`)

    }
}); //nuke





























client.on('message', (msg) => {
   var word = [
     "**Your Luck Is 80%**",
    "**Your Luck Is 1%**",
"**Your Luck Is 90%**",
    "**Your Luck Is 50%**",
    "**Your Luck Is 60%**",
    "**Your Luck Is 100%**",
    "**Your Luck Is 70%**",
    "**Your Luck Is 20%**",
"**Your Luck Is 40%**",
"**Your Luck Is 0%**",

  ]
  if (msg.author.bot) return
  if (msg.content === prefix + "luck") {
  if(db.has("u", msg.author.id)) return msg.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
    var result = word[Math.floor(Math.random() * word.length)];
    msg.reply(result)
  }
})











client.on('message', message =>{
    if (message.content.startsWith(prefix + "hide")) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**:x: You Can't Have A Permission __MANAGE_CHANNELS__**`)
       if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
        let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
        message.channel.createOverwrite(everyone, {
            VIEW_CHANNEL: false,
        })
        message.channel.send("**✅ - تم أخفاء الشات**");
    }
    if (message.content.startsWith(prefix + "show")) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**:x: You Can't Have A Permission __MANAGE_CHANNELS__**`)
        if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
        let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
        message.channel.createOverwrite(everyone, {
            VIEW_CHANNEL: true,
        })
        message.channel.send("**✅ - تم أظهار الشات**")
    
}}); 







 

 







client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "mute")){
        if(!normal.member.hasPermission('MANAGE_ROLES')) return normal.channel.send("You don't have permissions")
         const args = normal.content.slice(prefix.length).trim().split(/ +/g);
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                if(!member) return normal.channel.send(`**Please Mention The User ${args.slice(1).join(' ')} **`)
                if (member.id === normal.author.id)return normal.reply(`**You can't mute yourself**`)
      if (member.id === normal.guild.me.id)return normal.reply(`**You can't mute me dumbass**`)
        let mutedrole = normal.guild.roles.cache.find(ro => ro.name === 'muted')
        if(!mutedrole) {
        try {
        var createdrole = await normal.guild.roles.create({
                      data : {
                        name : 'muted',
                        permissions: [],
                    }});
                        normal.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(createdrole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS : false
                            })
                        })
                } catch (err) {
                console.log(err)
            }};
let muterole = normal.guild.roles.cache.find(r => r.name === 'muted')
         member.roles.add(muterole)
        normal.channel.send(`**🤐 - تم أسكات ${member.user.username}**`)
    } 
}) 













client.on('message', (msg) => {
   var word = [
    "**كم عمرك؟ (بدون كذب)**",
    "**اي واحد تفضل؟ الجوال ـ البيسي**",
    "**ايش افضل تاريخ عندك؟**",
    "**ايش افضل لعبة عندك؟**",
"**ايش تستعمل؟ جوال او بيسي**",
    "**منشن صديقك المفضل**",
    "**اخر مرة بكيت فيها؟**",
    "**حط ايموجي يعبر عن وضعك حاليا**",
    "**حظك بأختصار؟**",
    "**اكثر شي تحبه في الديسكورد؟**",
"**اكثر شي تكرهه في الديسكورد؟**",
    "**منشن اول شخص تعرفت عليه في الديسكورد؟**",
    "**كم من 10 تحب صوتك؟**",
    "**كم من 10 تقيم حظك؟**",
    "**اخر مرة سافرت فيها؟**",
    "**اكثر وجبة تحبها؟**",
"**اكثر شي تحبه؟**",
"**كم من عشرة تحب الديسكورد؟**",
    "**كم جبت في اخر امتحان لك؟**",
    "**كم من 10 تحب حياتك؟**",
    "**اخر هوشة جلدت ولا انجلدت؟**",
    "**اكثر شي تحبه (شاي ـ قهوة) ؟**",
    "**اكثر ايموجي تستعمله؟**",
    "**اكثر ايموجي تحبه؟**",
    "**كم عمر حسابك؟**",
    "**منشن شخص ما تحب تكلمه؟**",
    "**منشن اكثر شخص ساعدك؟**",
    "**ايش الشي الي مستحيل يتعوض؟**",
    "**اكثر يوتيوبر تحبه؟**",
    "**اخر مكالمة من مين كانت؟**",
    "**منشن اخر شخص تكلمت معه؟**",
    "**اكثر شي يجيبلك صداع؟**",
    "**اشياء صرت تكرهها؟**",
    "**اشياء صرت تحبها؟**",
    "**اكثر كلمة تقولها؟**",
    "**تحب الطلعة او لا؟**",
    "**اول كلمة اجت في بالك الحين؟**",
    "**اكثر ايموجي تكرهه؟**",
    "**هل تحب البوت؟**",
    "**اكثر بوت تحبه؟**",
    "**اكثر بوت تستعمله؟**"
  ]
  if (msg.author.bot) return
  if (msg.content === prefix + "cut") {
  if(db.has("u", msg.author.id)) return msg.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
    var result = word[Math.floor(Math.random() * word.length)];
    let embed = new Discord.MessageEmbed() 
     .setTitle("**DeviBot**") 
     .setDescription(result) 
   msg.channel.send(embed) 
  }
})











client.on('message', message => {
    if (message.content.startsWith(prefix + "ban")) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return
        if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
        let user = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1])
        if (!user) return message.channel.send("**:x: - لا أستطيع أيجاد العضو**")
      
    message.guild.member(user).ban()
        message.channel.send("**✅ - تم تبنيد العضو من الـ سيرفر**")
    }
}); //ban


















client.on('message', message => {
    if (message.content.startsWith(prefix + "nick")) {
        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return
    if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
        let user = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1])
        if (!user) return
        var args = message.content.split(" ").slice(2).join(" ")
        if (!user) return
        message.guild.member(user).setNickname(args)
        message.channel.send(`**✨ - تم تغيير أسم العضو إلي : ${args} !**`)
    }
}); //nickname  







client.on('message', message => {
    if (message.content.startsWith(prefix + "unlock")) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return
        if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
        let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
        message.channel.createOverwrite(everyone, {
            SEND_MESSAGES: true,
        })
        message.channel.send("**✅ - تم فتح الشات**")
    }
}); //unlock






client.on('message', message => {
    if (message.content.startsWith(prefix + "lock")) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return
        if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
        let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
        message.channel.createOverwrite(everyone, {
            SEND_MESSAGES: false,
        })
        message.channel.send("**✅ - تم قفل الشات**")
    }
}); //lock 





 


  











client.on("message",message => {
    if(message.content.startsWith(prefix + "user")){
if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
  let embed = new Discord.MessageEmbed()
  .setColor(color)
  .setTitle("User Command")
  .addField('أسم الـ مستخدم', ` ${message.author.tag} `, true)
  .addField('أيدي الـ مستخدم', ` ${message.author.id} `, true)  
  .addField('مدة الـ حساب', ` ${message.author.createdAt.toLocaleString()} `, true)
  .setFooter(`Requested By ${message.author.tag}`)  
  message.channel.send(embed)
  }
  });










client.on("message", message => {
  if(message.content.startsWith( prefix + 'role')){
  if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.react(`<a:YG_36:893111220645814333>`)
let role = message.mentions.roles.first()


if(!role) return message.reply(`**Please Mention The Member And Role.**`)
    let member = message.guild.member(message.mentions.users.first())
    if(!member) return message.reply(`**Please Mention The Role**`)
message.channel.send(`**:sparkles: - تم تغيير رتب العضو**`)
member.roles.add(role)
    

  }
}) 



client.on("message", async message =>{
let command = message.content.toLowerCase().split(" ")[0]
command = command.slice(prefix.length)
if(message.content.startsWith(prefix + "avatar")){
let args = message.content.split(" ")
let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1])
message.channel.send( new Discord.MessageEmbed()
.setAuthor(user.username,user.avatarURL())
.setDescription(`**[Avatar Link](${user.avatarURL()})**`)
.setImage(user.avatarURL(
{dynamic : true,
format : 'png',
size : 1024}
))
);
}
});




client.on("message",async message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}clear` || command == `${prefix}مسح` || command == `${prefix}cr`) { 
message.delete({timeout: 0})
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);
 
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.channel.send(`\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``).then(messages => messages.delete(5000))
if(!messagecount) messagecount = '100';
    message.channel.messages.fetch({limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
    message.channel.send(`\`\`\`js
 تـم حـذف  ${msgs.size} رسـالـة
\`\`\``).then(messages => 
messages.delete({timeout:3000}));
    })
  }    
});








 client.on('message', message => {
    if (message.content.startsWith('$bot')) {
    if(db.has("u", message.author.id)) return message.channel.send('**:x: - You Are Blacklisted Form DeviBot**') 
 let embed = new Discord.MessageEmbed() 
.setColor(color)  
      .setTitle("**DeviBot Info**") 
      .setDescription(`> **البادئة : $**
__-__
> **الخوادم : ${client.guilds.cache.size}**
__-__
> **المستخدمين : ${client.users.cache.size}**
__-__
> **الرومات : ${client.channels.cache.size}**
__-__
> **المطورين : Youssef Khalid.#0001 , AmongUsPro#3626 **`) 
      .setFooter(`Requested By ${message.author.tag}`)  
   message.channel.send(embed) 
}
});   








client.login(TOKEN) 