const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "ukrainenews",
description:"ukrainenews command",
execute(message){
    fetch();
    function fetch(){
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
                fetch();
            }  
         });
}}}