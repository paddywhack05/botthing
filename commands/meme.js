const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "meme",
description:"meme command",
execute(message){
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
     
            message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
         
         }else {
            fetch();
         }
     
         
     });
    
}
}
}