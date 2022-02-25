//import DiscordJS, { BaseGuild, Guild, Intents } from 'discord.js'
const Discord = require('discord.js');

require('dotenv').config();
dotenv.config()
const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

const fs = require('fs')

client.commands = new Discord.Collection

const commadFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFile){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.on('ready', () => {
    console.log('IT is ready the bot')

    client.user.setActivity("bot",{type: "being a"})
})

client.on('messageCreate', (message) => {

    if(message.author.bot){
        return;
    }
 

    if (message.content === 'Up, Up, Down, Down, Left, Right, Left, Right, B, A'|| message.content === 'up, up, down, down, left, right, left, right, b, a'|| message.content === "Up Up Down Down Left Right Left Right B A"|| message.content === "up up down down left right left right b a") {
        message.reply({
            content: 'your codes have no power hear '+ message.author.username,
            
        })
    }
    if (message.content === 'hi bot'|| message.content === 'Hi bot') {
        message.reply({
            content: 'hello '+ message.author.username,
            
        })
    }

   
    
})


client.login(process.env.TOKEN)