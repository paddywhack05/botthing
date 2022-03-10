const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "ukrainenews",
description:"ukrainenews command",
execute(message){
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
}}