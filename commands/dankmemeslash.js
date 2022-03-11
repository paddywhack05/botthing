//const { Interaction } = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "dankmeme",
description:"dankmeme command",
execute(interaction){
        redditFetch({
     subreddit:'dankmeme',
     sort: 'top',
     allowNSFW: false,
    allowCrossPost: true,
     allowVideo: true,
     allowModPost: true,
    }).then(post => {
        if(post.upvote_ratio >= 0.90){
            interaction.channel.send(`here is a dank meme ${interaction.user.tag} ${post.title} ${post.url}`);
         }else {
             interaction.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and may be offensive here is another`)
             interaction.channel.send("!dankmeme")
         }  
      });
}}