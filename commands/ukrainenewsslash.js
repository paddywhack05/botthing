const Discord = require('discord.js');
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
            const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
            .setTitle(`${post.title}`)
            .setURL(`https://redd.it/${post.id}`)
            .setDescription(`${post.selftext}`)
            .setThumbnail(`${post.url}`)
            //.addField('field test','field description test')
            .setImage(`${post.url}`)
            .setFooter(`💬 ${post.num_comments} 👍 ${post.ups}`)
            interaction.channel.send({ embeds: [embed] });
            //message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
            }else {
                fetch();
            }  
         });
}}}