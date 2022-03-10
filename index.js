const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
const fs = require('fs');
const hibot = require('./commands/hibot');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); 
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready',() =>{
    console.log('its ready');
    client.user.setActivity('how the hell buttons', { type: 'WATCHING'});
    client.user.setPresence({
        status: "idle"
    });
});


client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()){
        console.log(interaction);
        if(interaction.customId==="e"){
        interaction.reply({content: `${interaction.user.tag} https://www.reddit.com/r/memes/comments/t9bm76/love_story_the_czar_and_his_table/`})

        }
    }
})
client.on('messageCreate',message =>{
 
  
   // interaction.reply({content:`${interaction.user.tag} clicked me thanks be to god`})
    if (message.content.toLowerCase() ==="!meme"){
        client.commands.get('meme').execute(message,client);
    }
    
    if (message.content.toLowerCase() ==="!button"){
       
        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId("e")
            .setLabel("click for meme of the day")
            .setStyle("SUCCESS"),
            new Discord.MessageButton()
            .setStyle("LINK")
            .setURL("https://www.reddit.com/r/memes/")
            .setLabel("r/memes")
        );
        message.channel.send({content: "meme of the day", components:[row]});
    }
    
    if (message.content.toLowerCase() === "!ring"){ 
       client.commands.get('ring').execute(message,client);
    }

    if (message.content.toLowerCase() === "!infuriating"){ 
        client.commands.get('infuriating').execute(message,client);
 }
 if (message.content.toLowerCase() === "!cat"){ 
    client.commands.get('cat').execute(message,client);
}

if (message.content.toLowerCase() === "!dog"){ 
client.commands.get('dog').execute(message,client);
}

if (message.content.toLowerCase() === "!minecraft"){ 
client.commands.get('minecraft').execute(message,client);
}
if (message.content.toLowerCase() === "!dankmeme"){ 
client.commands.get('dankmeme').execute(message,client);
}

if (message.content.toLowerCase() === "!rap"){ 
client.commands.get('rap').execute(message,client);
}
if (message.content.toLowerCase() === "!ukraine news"||message.content.toLowerCase() ==="!ukrainenews"){ 
client.commands.get('ukrainenews').execute(message,client);
}

if (message.content.toLowerCase() === "!ukraine"){ 
    client.commands.get('ukraine').execute(message,client);
}
if (message.content.toLowerCase() === '!commands') {
client.commands.get('command').execute(message,client);
}
   

    if (message.content.toLowerCase() === 'up, up, down, down, left, right, left, right, b, a'|| message.content.toLowerCase === "up up down down left right left right b a") {
    client.commands.get('konamicode').execute(message,client);
    }
    if (message.content.toLowerCase() === 'hi bot') {
    client.commands.get('hibot').execute(message,client);
    }

});




client.login(process.env.TOKEN)