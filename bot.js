const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
}); 





client.on('message', async msg => {
      client.snek = require('snekfetch');
    var p = "$"
  if(msg.content.startsWith(p + "s")) {
   let args = msg.content.split(' ').slice(1).join(' ');
  if(!args) return args.missing(msg, 'No text added', this.help);
  msg.channel.startTyping();
  const searchMessage = await msg.channel.send('Painting...');
  const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${encodeURIComponent(args)}`);
  msg.channel.send({file: { attachment:body.message, name: 'clyde.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
};
});





client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$members')
      var kayan = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('| ~![ حألة الاعضاء ]~!')
      .addBlankField(true)
      .addField('| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('| Server Members',`${message.guild.memberCount}`)
      message.channel.send(kayan);
    
    });




	

	
	
	









client.on('message', message => {/// الفا كود | Emoko#0001
     if (message.content === "$server-join") {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM") /// الفا كود | Emoko#0001
  .addField("**!~[ البوت داخل في سيرفرات  ]~!: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }/// الفا كود | Emoko#0001
});





  

client.on('ready', () => {
     client.user.setActivity("!~[ Commands | $help ]~!",{type: 'WATCHING'})

});






 client.on('ready', function(){
    client.user.setStatus("idle");
    var ms = 1 ;

});




      









client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**!~[ شكرا لآضافة البوت لسيرفرك ]~!**`)
      guild.owner.send(embed)
});







client.on('message', message => {
    if (message.content === "$maker-room") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
        if(!msg.guild.members.get(msg.author.id).hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You lack permissions.")
		
     message.guild.createChannel('Swalf✻-', 'voice')
	 message.guild.createChannel('Swalf✻-', 'voice')
	 message.guild.createChannel('Music✻-', 'voice')
	 message.guild.createChannel('Music✻-', 'voice')
	 message.guild.createChannel('Events✻-', 'voice')
	 message.guild.createChannel('Gaming✻-', 'voice')
	 message.guild.createChannel('welcome✻-', 'text')
	 message.guild.createChannel('info✻-', 'text')
	 message.guild.createChannel('bot✻-', 'text')
	 message.guild.createChannel('Youtube✻-', 'text')
	 message.guild.createChannel('Chat✻-', 'text')
	 message.guild.createChannel('Event✻-', 'text')
	 message.guild.createChannel('Gaming✻-', 'text')
	 message.guild.createChannel('Pic✻-', 'text')


message.channel.sendMessage('**!~[ انتظر لتعديل السيرفر :wrench: ]~!**')
}
});








client.on('message', function(msg) {
    const prefix = '$'
    if(msg.content.startsWith (prefix  + 'server-info')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`!~[ معلومات السيرفر ]~!`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });







const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "$";

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**!~[ التاريخ ]~! **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( ""+ Day + "-" + Month + "-" + Year + "")
             message.channel.sendEmbed(Date15);
    }
});






client.on('message', Sal => { // By Salto7#4595
  if(Sal.content === '$bot-info') { //هنا تغير البرفيكس
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(client.user.avatarURL)
  .addField('اسم البوت', client.user.username, true)
  .setFooter(client.user.tag, client.user.avatarURL, true)
  .addField('تاق البوت', client.user.discriminator, true)
  .addField('ايدي البوت', client.user.id, true)
.addField('     ** → صاحب البوت ←  ** ' ,' **  Brmoon - ? M3roof#3627 ** ')
  Sal.channel.sendEmbed(embed);
}
});





client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});




client.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.react("🇸🇦")
    msg.channel.send("🇸🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.react("🇪🇬")
    msg.channel.send("🇪🇬")
  }
});

client.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.react("🇲🇦")
    msg.channel.send("🇲🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.react("🇮🇶")
    msg.channel.send("🇮🇶")
  }
});

client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.react("🇩🇿")
    msg.channel.send("🇩🇿")
  }
});

client.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.react("🇦🇪")
    msg.channel.send("🇦🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.react("🇹🇳")
    msg.channel.send("🇹🇳")
  }
});

client.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.react("🇸🇾")
    msg.channel.send("🇸🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.react("🇱🇾")
    msg.channel.send("🇱🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.react("🇶🇦")
    msg.channel.send("🇶🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.react("🇸🇴")
    msg.channel.send("🇸🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.react("🇴🇲")
    msg.channel.send("🇴🇲")
  }
});

client.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.react("🇲🇷")
    msg.channel.send("🇲🇷")
  }
});











client.on('message', message => {
              var prefix = "$" ;
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)   
.addField('     **─════════════ ⦁{✯الاوامر العامة✯}⦁ ════════════─** ' ,' **   ** ')
.addField('     **→ معلومات حسابك ←** ' ,' **$id** ')
.addField('     **→ لمعرفة سرعة الانترنت ←**  ' ,' **$ping** ')
.addField('     **→ للحصول علي رابط البوت ←**  ' ,' **$invite** ')
.addField('     **→ معلومات البوت ←** ' , '**$bot-info**') 
.addField('     **→ لمعلومات الروم←** ' , '**$ch**') 
.addField('     **→الافتار ←** ' ,' ** $avatar**')
.addField('     **→ تاريخ اليوم←** ' , '**$date**')
.addField('     **→ معلومات السيرفر ← ** ' ,' **  $server-info  ** ')
.addField('     **→ لمعرفة حالة الاعضاء ← ** ' ,' **  $members  ** ')
.addField('     **→ صأنع البوت ← ** ' ,' **  $bot-owner ** ')
.addField('     **─════════════ ⦁{✯الالعاب✯}⦁ ════════════─** ' ,' **   ** ')
.addField('     **→ انجازات ماين كرافت ←  ** ' ,' **  $angaz ** ')
.addField('     ** → كتابة كلام مثل كلايد بوت ←  ** ' ,' **  $s ** ')
.addField('     ** → الزواج (مزحة) من الشخص ←  ** ' ,' **  $marry ** ')
.addField('     ** → حجر ورق مقص ←  ** ' ,' **  $rps ** ')
.addField('     **─════════════ ⦁{✯اوامر الادارة✯}⦁ ════════════─** ' ,' **   ** ')
.addField('     ** → اععطاء العضو باند ←  ** ' ,' **  $ban ** ')
.addField('     ** → طرد العضو من السيرفر ←  ** ' ,' **  $kick ** ')
.addField('     ** → مسح الشات ←  ** ' ,' **  $clear ** ')
.addField('     ** → مسح كل شي بالسيرفر ←  ** ' ,' **  $sd ** ')


.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});




  
  






client.on("message", async message => {
	var prefix = "$"
    if (message.content.startsWith(prefix + "angaz")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("Put something you want to achieve!");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
    }
});






  client.on('message', message => {
	  var prefix = "$"
    if (message.author.bot) return;
     if (message.content === prefix + "bot-owner") {


 message.author.sendMessage(`
 
~~TG_Pro~~

 __created By__: Brmooon - ? M3roof#3627



bot link : https://discordapp.com/oauth2/authorize?client_id=496501749926854657&scope=bot&permissions=388160
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});
  






client.on('message', message => {
	var prefix = "$"
if(message.content.startsWith(prefix + "invite")) { 
message.author.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`);
}
});


client.on('message', message => {
     if (message.content === "$invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});








  client.on('message', message => {
      if(message.content.startsWith ("$marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تطلب ايد وحدة**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' 😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} 
 العرض لمدة 15 ثانية  
 اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
        
  }
});
  






  
    client.on('message', message => {
		var prefix = "$"
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});


  
  
  
    client.on("message", message => {
    var prefix = "$"; // غير هنا حط البرفكس
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "TG_Pro" // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
  

  
  
  
  
  client.on('message', message => {
const prefix = "$";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("آي دي روم اللوق").send({embed : banembed})
}
});
  
  
  
  
  
  
  
  
client.on("message",function(message) {
	var prefix = "$"
    if(message.content.startsWith(prefix + 'uptime')) {
        let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
    
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("# | S Bot  |") 
let norelden = new Discord.RichEmbed()
.setColor('#9b59b6')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("  S Bot |");
  message.channel.send({embed:v1}).then(m => m.edit({embed:norelden}),5000);
}
});
  
  
  
  
  


  client.on('message', msg => {
var prefix = "$";
  if(!msg.guild) return;
    if(!msg.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**⚠ لا يوجد لديك صلاحية**');
    if (msg.content.startsWith(prefix +'sd')) {
let ra3d = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(msg.author.avatarURL)
.setDescription(`هل انت متاكد من مسح كل شي بالسيرفر ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)                                                                                                                                                                       
msg.channel.send(ra3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❌').then(r=>{           
 let sd = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
 let nd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 let ds  = message.createReactionCollector(sd, { time: 60000 });
 let dn  = message.createReactionCollector(nd, { time: 60000 });
dn.on("collect", r => {
msg.channel.send("`تم الالغاء`")
message.delete();
})
ds.on("collect", r => {
message.guild.roles.forEach(r => { r.delete() }) 
     message.guild.channels.forEach(c => { c.delete() })
     message.guild.createChannel('general', 'text').then(c=> c.send(ra3d));
     let ra3d = new Discord.RichEmbed()
            .setColor('#fd0101')
            .setDescription('`✅ تم حذف كل شي في السيرفر`')
           message.channel.sendEmbed(ra3d);
})
})
})
})
}
});
  
  
  
  
  
  
  
  client.on('message', message => {
	  var prefix = "$"
 if(message.content.startsWith(prefix +"-server")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**", '**Unknown**' ,true)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});
  
  
  
  
  
  
  
const bannedwords = [
    "كلب",
    "حيوان",
    "معفن",
    "كل زق",
    "كل تبن"





  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنع الشتم في خادمنا او سوف تتعرض الي  ميوت :angry: ").then(msg => {msg.delete(5000)});;
  };
});
  
  
  
  
  
  
  
  
  client.on("message", function(message) {
	  var prefix = "$"
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

  
  
  
  

  
  
  



  
  

  
  
  
  
  
  
  



client.on('message', msg => {
  if (msg.content === '$ping') {
   msg.reply('✅ سرعة النت حقك ');
  }
});




client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "$";
if(message.content.startsWith(prefix + 'ch')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("معلومات الروم")
      .setColor("RANDOM")
      .setDescription(`ايدي الروم <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("صنع في", `${channel.createdAt}`)
      .addField("نوع الروم", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });





client.on("message", (Duy0) => {
  if (Duy0.content.startsWith('$dr')) {
      if (!Duy0.member.hasPermission('MANAGE_CHANNELS')) return Duy0.reply("You do not have the power ``Manage_Channels`` In order to delete the room");
      if(!Duy0.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("I have no authority ``Manage_Channels`` In order to delete the Room");



      let Alpha = Duy0.content.split(' ').slice(1);
      let channel = Duy0.client.channels.find('name', Alpha.join(' '));
      if (!channel) return Duy0.reply('**لا يوجد روم بهذا الاسم**').catch(console.error);
      channel.delete() 
  Duy0.channel.send(`${Alpha} 
تم حذف الروم بنجاح `)
}
});








client.on ('message',async Sal => { //By Salto7#4595
    let embed = new Discord.RichEmbed()
    if (Sal.content === "$id") {
      let embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setThumbnail(Sal.author.avatarURL)
     .setImage(Sal.author.avatarURL)
     .addField("اسمك:",`${Sal.author.username}`, true)
     .addField('ايديك:',"" +  Sal.author.id, true)
     .addField('تاقك', Sal.author.discriminator, true)
     .addField('تم الانشاء في', Sal.author.createdAt, true)
     Sal.channel.sendEmbed(embed);



  




  message.channel.sendEmbed(embed);
    }
});




client.login(process.env.BOT_TOKEN);
