const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "ukrainenewsslash",
description:"ukrainenewsslash command",
execute(interaction){
    redditFetch({
        subreddit:'UkraineWarReports',
        sort: 'top',
        allowNSFW: false,
       allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
       }).then(post => {
           if(post.upvote_ratio >= 0.90){
               console.log("it works i guess" + interaction.user.tag);
               interaction.channel.send(`here is news about ukraine ${interaction.user.tag} ${post.title} ${post.selftext} ${post.url}`);
            }else {
                interaction.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and he may have betrayed glorious Ukrain with russian propaganda here is another`)
                interaction.channel.send("!ukraine news")
            }  
         });
}}