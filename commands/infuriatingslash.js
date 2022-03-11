const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "infuriatingslash",
description:"infuriatingslash command",
execute(interaction){
    redditFetch({
        subreddit:'mildyinfuriating',
        sort: 'top',
        allowNSFW: false,
    allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
     }).then(post => {
         
         if(post.upvote_ratio >= 0.90){
           interaction.channel.send(`here is a infuriating thing ${interaction.user.tag}  ${post.title} ${post.selftext} ${post.url}`);
        }else {
            interaction.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and may be offensive here is another`)
            interaction.channel.send("!infuriating")
        }  
    });
}}