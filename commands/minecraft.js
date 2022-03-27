const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "minecraft",
description:"minecraft command",
execute(message){
    fetch();
    function fetch(){
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
                fetch();
            }  
         });
}}}