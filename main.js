const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('Ready!');
    client.user.setGame('PUBG with Raven')
});

client.on('message', async message => {
    if (!message.content.startsWith('!') || message.author.bot) return;

const args = message.content.slice('!').split(/ +/);
const command = args.shift().toLowerCase(); 
    if (message.content === `!help`) {
        message.channel.send('Hello . Im a custom bot made by Raven#3776. Explore the commands available by typing `!commands` ');
    }
    else if (message.content === `!commands`) {
        message.channel.send('The commands for now are :\n!help\n!serverinfo\n!userinfo\n!avatar\n!kick ')
    }
    else if (message.content === `!serverinfo`) {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
    else if (message.content.startsWith === `!raven`) {
        message.channel.send(`Raven is my creator . Add him as a friend , his username is Raven#3776 `);
    }
    else if (message.content === `!userinfo`) {
        message.channel.send(`Requested by: ${message.author.displayAvatarURL}\nYour username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
    else if (command === `!avatar`) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
        }
        }
    else if (command === `!prune`) {
        const amount = parseInt(args[0]);
        
        if (isNaN(amount)) {
                return message.reply('That doesn\'t seem to be a valid number.');
        }
        
            message.channel.bulkDelete(amount);
    }
    else if(command === `!react`) {
        
        message.react((args[0]));
        message.react((args[1]));
        message.react((args[2]));
    }
     if(command === "!kick") {
        if(!message.member.roles.some(r=>["Admin", "Moderator","Owner","Mod"].includes(r.name)) )
          return message.reply("Sorry, you don't have permissions to use this!");
        let member = message.mentions.members.first();
        if(!member)
          return message.reply("Please mention a valid member of this server");
        if(!member.kickable) 
          return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
        
        let reason = args.slice(1).join(' ');
        if(!reason)
          return message.reply("Please indicate a reason for the kick!");
        
        await member.kick(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    
      }
      else if(command === `!wiki`) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        message.reply((args));
    
}});

client.login('NDIzNDY5MjA4NDIxMTM4NDMz.DZ5xBg.1bcVTxF6jChFZ2uKueT4krUOda4');
