//const { Interaction } = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "dankmemeslash",
description:"dankmemeslash command",
execute(interaction){
    fetch();
    function fetch(){
        redditFetch({
     subreddit:'dankmeme',
     sort: 'top',
     allowNSFW: false,
    allowCrossPost: true,
     allowVideo: true,
     allowModPost: true,
    }).then(post => {
        console.log(post.upvote_ratio)
        if(post.upvote_ratio >= 0.90){
            interaction.channel.send(`here is a dank meme ${interaction.user.tag} ${post.title} ${post.url}`);
         }else {
             fetch();
         }  
      });
}}}