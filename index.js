const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); 



client.once('ready',() =>{
    console.log('its ready');
    client.user.setActivity('how to be a bot', { type: 'WATCHING'});
    client.user.setPresence({
        status: "idle"
    });
});



client.on('messageCreate',message =>{
    if(message.author.bot)return;


    if(message.author.bot){
        return;
    }
   

    if (message.content === 'Up, Up, Down, Down, Left, Right, Left, Right, B, A'|| message.content === 'up, up, down, down, left, right, left, right, b, a'|| message.content === "Up Up Down Down Left Right Left Right B A"|| message.content === "up up down down left right left right b a") {
        message.reply({
            content: 'hello '+ message.author.username,
            content: 'your codes have no power hear '+ message.author.username,
            
        })
    }
    if (message.content === 'hi bot'|| message.content === 'Hi bot') {
        message.reply({
            content: 'hello '+ message.author.username,
            
        })
    }

});


client.login(process.env.TOKEN)