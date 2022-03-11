const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "ukraineslash",
description:"ukraineslash command",
execute(interaction){
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
           interaction.channel.send(`im sorry but that post has over 2000 charecters and is to long to post in discord`)
           interaction.channel.send("!ukraine")
        return; }
           if(post.upvote_ratio >= 0.90){
               interaction.channel.send(`here is news about ukraine ${interaction.user.tag} ${post.title} ${post.selftext} ${post.url}`);
            }else if(post.upvote_ratio <= 0.89) {
                interaction.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and he may have betrayed glorious Ukrain with russian propaganda here is another`)
                interaction.channel.send("!ukraine")
            }  
         });
}
}
