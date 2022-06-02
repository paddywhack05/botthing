const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
const{MessageActionRow,MessageButton} = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const { description } = require('./commands/ukrainenews');
const cat = require('./commands/cat');
const ukraine = require('./commands/ukraine');
const dog = require('./commands/dog');
const dogslash = require('./commands/dogslash');
const minecraft = require('./commands/minecraft');
const rap = require('./commands/rap');
const dice = require('./commands/dice');
const hack = require('./commands/hack');
const dcsl = require('./commands/dcsl');


//const meme = require('./commands/meme');
const client = new Discord.Client({  partials: ["CHANNEL"], intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS","DIRECT_MESSAGES","DIRECT_MESSAGE_TYPING","DIRECT_MESSAGE_REACTIONS"] }); 
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', async() =>{
    console.log('its ready');
    const bot_guilds = client.guilds.cache.map(guild=> guild.name);
    console.log(bot_guilds);
    const ascii={
        name:'ascii',
        description:'posts an ascii image',
    }
    const dcsl={
        name:'dcsl',
        description:'dcsl info and songs',
    }
   const dice ={
    name:'dice',
    description:'rolls dice',
   }
   const help ={
    name:'help',
    description:'help command',
   }
   const hack ={
       name:'hack',
       description:'hacking but way better than dank memer hacking with an actual script',
   }
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
  const technicaly ={
    name: 'technicaly',
    description:'like technically',
  }
  const userinfo={
    name: 'userinfo',
    description:'gives you info about you',
    options:[{
        name:'member',
        type: 'USER',
        description:'User to get info on',
        required:'false',
    },
    ],
}
const info={
    name: 'info',
    description:'gives you info about paddycrack',
}
const invite={
    name: 'invite',
    description:'gives you an invite link',
}
const vote={
    name: 'vote',
    description:'links you to my top.gg and dbl please vote for me to spread my bot',
}
    const ping ={
    name: 'ping',
    description:'checks latency',
    }
    const dadjoke={
        name: 'dadjoke',
        description:'gives you a dad joke',
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
    const reddit = {
        name: 'reddit',
        description: 'Any subreddit',
        options:[{
            name:'subreddit',
            type: 'STRING',
            description:'decides subreddit',
            required:'true',
        }],
    };
    const ub = {
        name: 'urban',
        description: 'urban dictionary defintions',
        options:[{
            name:'search',
            type: 'STRING',
            description:'search term on urban dictionary',
            required:'true',
        },
        ],
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
    const diceslash = await client.application?.commands.create(dice)
    const hackslash = await client.application?.commands.create(hack)
    const helpslash = await client.application?.commands.create(help)
    const dcslslash = await client.application?.commands.create(dcsl)
    const asciislash = await client.application?.commands.create(ascii)
    const redditslash = await client.application?.commands.create(reddit)
    const technicalyslash = await client.application?.commands.create(technicaly)
    const pingslash = await client.application?.commands.create(ping)
    const userinfoslash = await client.application?.commands.create(userinfo)
    const infoslash = await client.application?.commands.create(info)
    const voteslash = await client.application?.commands.create(vote)
    const inviteslash = await client.application?.commands.create(invite)
    const dadjokeslash = await client.application?.commands.create(dadjoke)
    const ubslash = await client.application?.commands.create(ub)

    client.user.setActivity(`in ${client.guilds.cache.size} servers !vote`, { type: 'PLAYING'});
    client.user.setPresence({
        status: "idle"
    });
});


client.on("interactionCreate", async (interaction) => {
    
    if (interaction.isCommand()){
        if(interaction.commandName==='userinfo'){
            const text = interaction.options.getUser('member');
            client.commands.get('userinfoslash').execute(interaction,client,text);
        }
        if (interaction.commandName ==='urban'){
            const text = interaction.options.getString('search');
            client.commands.get('ubslash').execute(interaction,client,text);
        }
        if(interaction.commandName==='invite'){
            client.commands.get('inviteslash').execute(interaction,client);
        }
        if(interaction.commandName==='info'){
            client.commands.get('infoslash').execute(interaction,client);
        }
        if(interaction.commandName==='dadjoke'){
            client.commands.get('dadjokeslash').execute(interaction,client);
        }
        if (interaction.commandName ==='vote'){
            client.commands.get('voteslash').execute(interaction,client);
        }
        if(interaction.commandName==='dcsl'){
            client.commands.get('dcslslash').execute(interaction,client);
        }
        if(interaction.commandName==='ascii'){
            client.commands.get('asciislash').execute(interaction,client);
        }
        if(interaction.commandName==='help'){
            client.commands.get('helpslash').execute(interaction,client);
        }
        if(interaction.commandName==='ping'){
            interaction.reply(`🏓 Pong! latency is ${Date.now() - interaction.createdTimestamp}ms API Latency is ${Math.round(client.ws.ping)}ms`);
        }
        if(interaction.commandName==='hack'){
            client.commands.get('hackslash').execute(interaction,client);
        }
        if(interaction.commandName==='ukrainenews'){
            client.commands.get('ukrainenewsslash').execute(interaction,client);
        }
        if(interaction.commandName==='dice'){
            client.commands.get('diceslash').execute(interaction,client);
        }
        if(interaction.commandName==='rap'){
            client.commands.get('rapslash').execute(interaction,client);
        }
        if(interaction.commandName==='minecraft'){
            client.commands.get('minecraftslash').execute(interaction,client);
        }
        if(interaction.commandName==='dog'){
            client.commands.get('dogslash').execute(interaction,client);
        }
        if(interaction.commandName==='ring'){
            client.commands.get('ringslash').execute(interaction,client);
        }
        if(interaction.commandName === 'ukraine'){
            client.commands.get('ukraineslash').execute(interaction,client);
        }
        if(interaction.commandName === 'cat'){
            client.commands.get('catslash').execute(interaction,client);
        }
        if(interaction.commandName === 'infuriating'){
            client.commands.get('infuriatingslash').execute(interaction,client);
        }
        if(interaction.commandName === 'dankmeme'){
            client.commands.get('dankmemeslash').execute(interaction,client);
        }
        if (interaction.commandName === 'meme'){
             client.commands.get('memeslash').execute(interaction,client);
        }
        if (interaction.commandName ==='echo'){
            const text = interaction.options.getString('yourtext');
            await interaction.reply({content: text + '.', ephemeral: false});
        }
        if (interaction.commandName ==='reddit'){
            const text = interaction.options.getString('subreddit');
            client.commands.get('redditslash').execute(interaction,client,text);
        }
        if (interaction.commandName ==='technicaly'){
            client.commands.get('technicallyslash').execute(interaction,client);
        }
    }
    if (interaction.isButton()){
        console.log(interaction);
        if(interaction.guild){
        const channelObject = interaction.guild.channels.cache.get(interaction.channel.id); // Gets the channel object
        if (channelObject.type === 'voice') {interaction.reply("Sorry you cant use buttons in vc text"); return;}
        }
        // await interaction.deferUpdate();
        if(interaction.customId==="meme"){
            client.commands.get('memeslash').execute(interaction,client);

        }
        if(interaction.customId==="technicaly"){
             client.commands.get('technicallyslash').execute(interaction,client);
 
         }
        if(interaction.customId==="dankmeme"){
            client.commands.get('dankmemeslash').execute(interaction,client);
        }
        if(interaction.customId==="cat"){
            client.commands.get('catslash').execute(interaction,client);
        }
        if(interaction.customId==="dog"){
            client.commands.get('dogslash').execute(interaction,client);
        }
        if(interaction.customId==="infuriating"){
            client.commands.get('infuriatingslash').execute(interaction,client);
        }
        if(interaction.customId==="minecraft"){
            client.commands.get('minecraftslash').execute(interaction,client);
        }
        if(interaction.customId==="news"){
            client.commands.get('ukrainenewsslash').execute(interaction,client);
        }
        if(interaction.customId==="ukraine"){
            client.commands.get('ukraineslash').execute(interaction,client);
        }
    
}
})
client.on('guildCreate', async guild => {
    console.log(guild.name);
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    const owner = await guild.fetchOwner();
    client.commands.get('join').execute(guild,client,owner,channel);
})
client.on('messageCreate', async message =>{
 
    if(message.channelId ==='975086263247986698'){
        var er = message.mentions.users.first();
        if(!er){return;}
        else{
try{
    er.send("Thank you for voting"); return;
}catch (error) {
    console.error(error);
    message.channel.send("He voted but he is not here"); return;
  
}}
     }
   // interaction.reply({content:`${interaction.user.tag} clicked me thanks be to god`})
   if (message.content.toLowerCase() === "!dcsl"){
       client.commands.get('dcsl').execute(message,client);
    }
    if (message.content.toLowerCase() ==="!meme"){
        client.commands.get('meme').execute(message,client);
    }
    if(message.content.toLowerCase()==='!dadjoke'){
        client.commands.get('dadjoke').execute(message,client);
    }
    if (message.content.toLowerCase().startsWith("!userinfo")){
        client.commands.get('userinfo').execute(message,client);
    }
    if (message.content.toLowerCase() ==="!invite"){
        client.commands.get('invite').execute(message,client);
    }
    if (message.content.toLowerCase() ==="!info"){
        client.commands.get('info').execute(message,client);
    }
    if (message.content.toLowerCase() === "!vote"){ 
        client.commands.get('vote').execute(message,client);
     }
    if (message.content.toLowerCase() ==="!rickroll"){
        client.commands.get('rickroll').execute(message,client);
    }
    if (message.content === '!ping') {  
        message.channel.send(`🏓 Pong! latency is ${Date.now() - message.createdTimestamp}ms API Latency is ${Math.round(client.ws.ping)}ms`);
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
    
    if (message.content.toLowerCase() === "!ascii"){ 
        client.commands.get('ascii').execute(message,client);
     }

    if (message.content.toLowerCase() === "!ring"){ 
       client.commands.get('ring').execute(message,client);
    }
    
    if (message.content.toLowerCase() === "!hack"){
        client.commands.get('hack').execute(message,client);
    }
    if (message.content.toLowerCase() === "cat exspectedpasses.txt"){
        message.channel.send("d3ad16e86a2bf2c2ad74cc177ae69025: I cant belive you looked it up")
    }


    if (message.content.toLowerCase() === "!dice"){ 
        client.commands.get('dice').execute(message,client);
    }
    if (message.content.toLowerCase() === "do a barrel roll"){ 
        client.commands.get('roll').execute(message,client);
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

if (message.content.toLowerCase() === '!commands'||message.content.toLowerCase()==='!help') {
client.commands.get('command').execute(message,client);
}

if (message.content.toLowerCase() === "!technically"||message.content.toLowerCase() === "!technicallythetruth"){ 
    client.commands.get('technically').execute(message,client);
}

    if (message.content.toLowerCase() === 'up, up, down, down, left, right, left, right, b, a'|| message.content.toLowerCase === "up up down down left right left right b a") {
    client.commands.get('konamicode').execute(message,client);
    }
    if (message.content.toLowerCase() === 'hi bot') {
    client.commands.get('hibot').execute(message,client);
    }

});




client.login(process.env.TOKEN);