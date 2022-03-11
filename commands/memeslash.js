const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "memeslash",
description:"memeslash command",
execute(interaction,client){
    
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
            interaction.channel.send(`here is a meme ${interaction.user.tag} ${post.title} ${post.url}`);
         }else {
             interaction.channel.send(`im sorry but that meme has a ${post.upvote_ratio} upvote ratio and may be offensive please try again here is another`)
             interaction.channel.send("!meme")
         }
     
         
     });
  
}
}