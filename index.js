const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
const fs = require('fs');
const { description } = require('./commands/ukrainenews');
const cat = require('./commands/cat');
const ukraine = require('./commands/ukraine');
const dog = require('./commands/dog');
const dogslash = require('./commands/dogslash');
const minecraft = require('./commands/minecraft');
const rap = require('./commands/rap');
require('dotenv').config()



//const meme = require('./commands/meme');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); 
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', async() =>{
    console.log('its ready');
    const ukrainenews ={
        name:'ukrainenews',
        description:'news about ukraine',
    }
    const rap ={
        name:'rap',
        description:'gives you a fat rap',
    }
    const minecraft ={
        name:'minecraft',
        description: 'gives you stuff about minecraft',
    }
    const dog ={
        name:'dog',
        description:'gives you a dog picture',
    }
    const ring ={
        name:'ring',
        description:'plays ring sound affect',
    }
    const ukraine={
        name:'ukraine',
        description:'ukraine stuff',
    }
    const cat ={
        name:'cat',
        description: 'gives you a cat picture',
    }
    const infuriating ={
        name: 'infuriating',
        description: 'gives you somthing infuriating',
    }
    const dankmeme ={
        name: 'dankmeme',
        description:'gives you a dankmeme',
    }
  const meme ={
        name: 'meme',
        description:'gives you a meme',
  }
    const data = {
        name: 'echo',
        description: 'echo thing',
        options:[{
            name:'yourtext',
            type: 'STRING',
            description:'echo',
            required:'true',
        }],
    };
    const command = await client.application?.commands.create(data);
    const memeslash = await client.application?.commands.create(meme);
    const dankmemeslash = await client.application?.commands.create(dankmeme);
    const infuriatingslash = await client.application?.commands.create(infuriating);
    const catslash = await client.application?.commands.create(cat);
    const ukraineslash = await client.application?.commands.create(ukraine);
    const ringslash = await client.application?.commands.create(ring);
    const dogslash = await client.application?.commands.create(dog);
    const minecraftslash = await client.application?.commands.create(minecraft);
    const rapslash = await client.application?.commands.create(rap)
    const ukrainenewsslash = await client.application?.commands.create(ukrainenews)
    client.user.setActivity('how the hell buttons', { type: 'WATCHING'});
    client.user.setPresence({
        status: "idle"
    });
});


client.on("interactionCreate", async (interaction) => {

    if (interaction.isCommand()){
        if(interaction.commandName==='ukrainenews'){
            interaction.reply({content: 'loading ukraine news...', ephemeral: false}).then(interaction.deleteReply())
            client.commands.get('ukrainenewsslash').execute(interaction,client);
        }
        if(interaction.commandName==='rap'){
            interaction.reply({content: 'loading rap...', ephemeral: false}).then(interaction.deleteReply())
            client.commands.get('rapslash').execute(interaction,client);
        }
        if(interaction.commandName==='minecraft'){
            interaction.reply({content: 'loading minecraft...', ephemeral: false}).then(interaction.deleteReply())
            client.commands.get('minecraftslash').execute(interaction,client);
        }
        if(interaction.commandName==='dog'){
            interaction.reply({content: 'loading dog...', ephemeral: false}).then(interaction.deleteReply())
            client.commands.get('dogslash').execute(interaction,client);
        }
        if(interaction.commandName==='ring'){
            interaction.reply({content: 'ringing...', ephemeral: false}).then(interaction.deleteReply())
            client.commands.get('ringslash').execute(interaction,client);
        }
        if(interaction.commandName === 'ukraine'){
            interaction.reply({content: 'loading ukraine stuff...', ephemeral: false}).then(interaction.deleteReply())
            client.commands.get('ukraineslash').execute(interaction,client);
        }
        if(interaction.commandName === 'cat'){
            interaction.reply({content: 'loading cat...', ephemeral: false}).then(interaction.deleteReply())
            client.commands.get('catslash').execute(interaction,client);
        }
        if(interaction.commandName === 'infuriating'){
            interaction.reply({content: 'loading something infuriating...', ephemeral: false}).then(interaction.deleteReply())
            client.commands.get('infuriatingslash').execute(interaction,client);
        }
        if(interaction.commandName === 'dankmeme'){
            interaction.reply({content: 'loading dankmeme...', ephemeral: false}).then(interaction.deleteReply())
            client.commands.get('dankmemeslash').execute(interaction,client);
        }
        if (interaction.commandName === 'meme'){
            interaction.reply({content: 'loading meme...', ephemeral: false}).then(interaction.deleteReply())
             client.commands.get('memeslash').execute(interaction,client);
        }
        if (interaction.commandName ==='echo'){
            const text = interaction.options.getString('yourtext');
            await interaction.reply({content: text + '.', ephemeral: false});
        }
    }
    if (interaction.isButton()){
        console.log(interaction);
        if(interaction.customId==="e"){
            client.commands.get('memeslash').execute(interaction,client);
        }
    }
})
client.on('messageCreate', async message =>{
 
 
   // interaction.reply({content:`${interaction.user.tag} clicked me thanks be to god`})
    if (message.content.toLowerCase() ==="!meme"){
        client.commands.get('meme').execute(message,client);
    }
    if (message.content.toLowerCase() ==="do a barrel roll"){
        client.commands.get('roll').execute(message,client);
    }
    
    if (message.content.toLowerCase() ==="!button"){
        const row = new Discord.MessageActionRow().addComponents(
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
if (message.content.toLowerCase() === '!commands'||message.content.toLowerCase()=== '!help') {
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