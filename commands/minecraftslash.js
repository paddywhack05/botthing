const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "minecraftslash",
description:"minecraftsalsh command",
execute(interaction){
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
               interaction.channel.send(`here is a minecraft thing ${interaction.user.tag} ${post.title} ${post.url}`);
            }else {
                fetch();
            }  
         });
}}}