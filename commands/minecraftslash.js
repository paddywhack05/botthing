const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "minecraftslash",
description:"minecraftsalsh command",
execute(interaction){
    redditFetch({
        subreddit:'Minecraft',
        sort: 'top',
        allowNSFW: false,
       allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
       }).then(post => {
           if(post.upvote_ratio >= 0.90){
               interaction.channel.send(`here is a minecraft thing ${interaction.user.tag} ${post.title} ${post.url}`);
            }else {
                interaction.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and may be offensive here is another`)
                interaction.channel.send("!minecraft")
            }  
         });
}}