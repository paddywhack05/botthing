//import DiscordJS, { BaseGuild, Guild, Intents } from 'discord.js'
const Discord = require('discord.js');

//require('dotenv').config();
//dotenv.config()
const { Client, Intents} = require('discord.js');
const client = new Discord.Client({ intents: 32767 });




const fs = require('fs')

client.commands = new Discord.Collection

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFile){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.on('ready', () => {
    console.log('IT is ready the bot')

})

client.on('messageCreate', (message) => {

    if(message.author.bot){
        return;
    }
 
    if(message.content==='test bot 123'){
        client.commands.get('jokes').execute(message,args);
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


client.login('OTE2NzQzODY2OTE1Mzg5NTQy.YaumQg.oYJXTg8_xN-eTNegOYkpsz94biY');