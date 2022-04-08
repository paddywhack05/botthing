const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "dog",
description:"cat command",
execute(message){
    fetch();
    function fetch(){
    redditFetch({
        subreddit:'dogimages',
        sort: 'top',
        allowNSFW: false,
       allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
       }).then(post => {
        
           if(post.upvote_ratio >= 0.90){
            const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(`${post.title}`)
            .setURL(`https://redd.it/${post.id}`)
            .setDescription(`${post.selftext}`)
            .setThumbnail(`${post.url}`)
            //.addField('field test','field description test')
            .setImage(`${post.url}`)
            .setFooter(`💬 ${post.num_comments} 👍 ${post.ups}`)
            message.channel.send({ embeds: [embed] });
            //message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
          }else {
              fetch();
          }  
       });
}}}