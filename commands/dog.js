const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "dog",
description:"cat command",
execute(message){
    redditFetch({
        subreddit:'dogimages',
        sort: 'top',
        allowNSFW: false,
       allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
       }).then(post => {
          
           if(post.upvote_ratio >= 0.90){
             message.channel.send(`here is a dog ${message.author} ${post.title} ${post.url}`);
          }else {
              message.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and may be offensive here is another`)
              message.channel.send("!dog")
          }  
       });
}}