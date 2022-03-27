const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "infuriating",
description:"infuriating command",
execute(message){
    fetch();
    function fetch(){
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
            fetch();
        }  
    });
}}}