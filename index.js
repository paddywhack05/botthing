const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); 



client.once('ready',() =>{
    console.log('its ready');
    client.user.setActivity('reddit memes', { type: 'WATCHING'});
    client.user.setPresence({
        status: "idle"
    });
});



client.on('messageCreate',message =>{
    if(message.author.bot)return;


    if(message.author.bot){
        return;
    }
    if (message.content === "!meme"){ 
           redditFetch({
        subreddit:'memes',
        sort: 'top',
        allowNSFW: false,
    allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
     }).then(post => {
         message.channel.send(`here is a meme ${message.author} ${post.url}`);
     
         
     });
    
    }
    if (message.content === "!infuriating"){ 
        redditFetch({
     subreddit:'mildyinfuriating',
     sort: 'top',
     allowNSFW: false,
 allowCrossPost: true,
     allowVideo: true,
     allowModPost: true,
  }).then(post => {
      message.channel.send(`here is a infuriating thing ${message.author}${post.thumbnail}${post.selftext}${post.url}`);
  });
 
 }
 if (message.content === "!cat"){ 
    redditFetch({
 subreddit:'cats',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: true,
}).then(post => {
  message.channel.send(`here is a cat ${message.author} ${post.url}`);
});

}

if (message.content === "!dog"){ 
    redditFetch({
 subreddit:'dogimages',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: true,
}).then(post => {
  message.channel.send(`here is a dog ${message.author} ${post.url}`);
});

}

if (message.content === "!minecraft"){ 
    redditFetch({
 subreddit:'Minecraft',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: true,
}).then(post => {
  message.channel.send(`here is a minecraft thing ${message.author} ${post.url}`);
});

}
if (message.content === "!dankmeme"){ 
    redditFetch({
 subreddit:'dankmeme',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: true,
}).then(post => {
  message.channel.send(`here is a dank meme ${message.author} ${post.url}`);
});

}

if (message.content === "!rap"){ 
    redditFetch({
 subreddit:'raplyrics',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: true,
}).then(post => {
  message.channel.send(`here is a rap ${message.author} ${post.selftext} ${post.url}`);
});

}
if (message.content === "!ukraine news"||message.content==="!Ukraine news"){ 
    redditFetch({
 subreddit:'UkraineWarReports',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: false,
}).then(post => {
  message.channel.send(`here is ukraine news ${message.author} ${post.title} ${post.selftext} ${post.url}`);
});

}

if (message.content === "!ukraine"||message.content==="!Ukraine"){ 
    redditFetch({
 subreddit:'ukraine',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: false,
}).then(post => {
    
  message.channel.send(`here is a thing about ukraine ${message.author} ${post.title} ${post.selftext} ${post.url}`);
});

}
if (message.content === '!commands') {
    message.reply({
        content: 'The commands are !meme !infuriating !cat !dog !minecraft !dankmeme !ukraine !ukraine news',
        
    })
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