const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "ukraineslash",
description:"ukraineslash command",
execute(interaction){
    fetch();
    function fetch(){
    redditFetch({
        subreddit:'ukraine',
        sort: 'top',
        allowNSFW: false,
       allowCrossPost: true,
        allowVideo: true,
        allowModPost: false,
       }).then(post => {
           console.log(post.length);
           if (post.selftext.length >= 1999){ 
           fetch();
        return; }
           if(post.upvote_ratio >= 0.90){
               interaction.channel.send(`here is news about ukraine ${interaction.user.tag} ${post.title} ${post.selftext} ${post.url}`);
            }else if(post.upvote_ratio <= 0.89) {
                fetch();
            }  
         });
}
}}
