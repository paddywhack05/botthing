const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "dogslash",
description:"dogslash command",
execute(interaction){
    fetch();
    function fetch(){
    redditFetch({
        subreddit:'dogimages',
        sort: 'top',
        allowNSFW: false,
       allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
       }).then(async post => {
      
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
            const row = new Discord.MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId(`dog`)
                .setLabel(`Next Dog`)
                .setStyle("SUCCESS"),
            )
 
            //await interaction.reply({ content:`next meme`,component: [row]})
            await interaction.channel.send({ embeds: [embed],components: [row]});
            //message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
          }else {
             fetch();
          }  
       });
}}}