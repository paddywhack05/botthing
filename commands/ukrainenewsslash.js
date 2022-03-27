const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "ukrainenewsslash",
description:"ukrainenewsslash command",
execute(interaction){
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
               console.log("it works i guess" + interaction.user.tag);
               interaction.channel.send(`here is news about ukraine ${interaction.user.tag} ${post.title} ${post.selftext} ${post.url}`);
            }else {
                fetch();
            }  
         });
}}}