const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "memeslash",
description:"memeslash command",
execute(interaction,client){
    fetch();
    function fetch(){
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
             fetch();
         }
     
         
     });
  
}
}}