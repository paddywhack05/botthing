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
 //   if(message.author.bot)return;


 //   if(message.author.bot){
   //     return;
   // }
    if (message.content.toLowerCase() === "!meme"){ 
           redditFetch({
        subreddit:'memes',
        sort: 'top',
        allowNSFW: false,
    allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
        
     }).then(post => {
         console.log(post);
         if(post.upvote_ratio >= 0.90){
            message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
         }else {
             message.channel.send(`im sorry but that meme has a ${post.upvote_ratio} upvote ratio and may be offensive please try again here is another`)
             message.channel.send("!meme")
         }
      
         
     });
    
    }
    if (message.content.toLowerCase() === "!infuriating"){ 
        redditFetch({
     subreddit:'mildyinfuriating',
     sort: 'top',
     allowNSFW: false,
 allowCrossPost: true,
     allowVideo: true,
     allowModPost: true,
  }).then(post => {
      
      if(post.upvote_ratio >= 0.90){
        message.channel.send(`here is a infuriating thing ${message.author}  ${post.title} ${post.selftext} ${post.url}`);
     }else {
         message.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and may be offensive here is another`)
         message.channel.send("!infuriating")
     }  
 });
  
 }
 if (message.content.toLowerCase() === "!ring"){ 
    message.reply ({content: "https://www.youtube.com/watch?v=Vk4KK-gh0FM"})
}
 if (message.content.toLowerCase() === "!cat"){ 
    redditFetch({
 subreddit:'cats',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: true,
}).then(post => {
 
    if(post.upvote_ratio >= 0.90){
        message.channel.send(`here is a cat ${message.author} ${post.title} ${post.url}`);
   }else {
       message.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and may be offensive here is another`)
       message.channel.send("!cat")
   }  
});

}

if (message.content.toLowerCase() === "!dog"){ 
    redditFetch({
 subreddit:'dogimages',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: true,
}).then(post => {
   
    if(post.upvote_ratio >= 0.90){
      message.channel.send(`here is a dog ${message.author} ${post.title} ${post.url}`);
   }else {
       message.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and may be offensive here is another`)
       message.channel.send("!dog")
   }  
});

}

if (message.content.toLowerCase() === "!minecraft"){ 
    redditFetch({
 subreddit:'Minecraft',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: true,
}).then(post => {
    if(post.upvote_ratio >= 0.90){
        message.channel.send(`here is a minecraft thing ${message.author} ${post.title} ${post.url}`);
     }else {
         message.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and may be offensive here is another`)
         message.channel.send("!minecraft")
     }  
  });
}
if (message.content.toLowerCase() === "!dankmeme"){ 
    redditFetch({
 subreddit:'dankmeme',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: true,
}).then(post => {
    if(post.upvote_ratio >= 0.90){
        message.channel.send(`here is a dank meme ${message.author} ${post.title} ${post.url}`);
     }else {
         message.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and may be offensive here is another`)
         message.channel.send("!dankmeme")
     }  
  });

}

if (message.content.toLowerCase() === "!rap"){ 
    redditFetch({
 subreddit:'raplyrics',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: true,
}).then(post => {
    if(post.upvote_ratio >= 0.90){
        message.channel.send(`here is a rap ${message.author} TITLE ${post.title} RAP ${post.selftext} ${post.url}`);
     }else {
         message.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and may be offensive here is another`)
         message.channel.send("!rap")
     }  
  });

}
if (message.content.toLowerCase() === "!ukraine news"||message.content.toLowerCase() ==="!ukrainenews"){ 
    redditFetch({
 subreddit:'UkraineWarReports',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: true,
}).then(post => {
    if(post.upvote_ratio >= 0.90){
        message.channel.send(`here is news about ukraine ${message.author} ${post.title} ${post.selftext} ${post.url}`);
     }else {
         message.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and he may have betrayed glorious Ukrain with russian propaganda here is another`)
         message.channel.send("!ukraine news")
     }  
  });

}

if (message.content.toLowerCase() === "!ukraine"){ 
    redditFetch({
 subreddit:'ukraine',
 sort: 'top',
 allowNSFW: false,
allowCrossPost: true,
 allowVideo: true,
 allowModPost: false,
}).then(post => {
    
    if(post.upvote_ratio >= 0.90){
        message.channel.send(`here is Ukraine thing ${message.author} ${post.title} ${post.selftext} ${post.url}`);
     }else {
         message.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and he may have betrayed glorious Ukrain with russian propaganda here is another`)
         message.channel.send("!ukraine")
     }  
  });

}
if (message.content.toLowerCase() === '!commands') {
    message.reply({
        content: 'The commands are !meme !infuriating !cat !dog !minecraft !dankmeme !ukraine !ukraine news',
        
    })
}
   

    if (message.content.toLowerCase() === 'up, up, down, down, left, right, left, right, b, a'|| message.content.toLowerCase === "up up down down left right left right b a") {
        message.reply({
            content: 'hello '+ message.author.username,
            content: 'your codes have no power hear '+ message.author.username,
            
        })
    }
    if (message.content.toLowerCase() === 'hi bot') {
        message.reply({
            content: 'hello '+ message.author.username,
            
        })
    }

});




client.login(process.env.TOKEN)