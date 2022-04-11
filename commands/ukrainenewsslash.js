const{MessageActionRow,MessageButton} = require('discord.js');
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
       }).then(async post => {
        if (post.selftext.length >= 1999){ 
            fetch();
         return; }
           if(post.upvote_ratio >= 0.90){
            var anser = post.ups / post.upvote_ratio/100;
            console.log(anser);
           var final = Math.round(anser);
            const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
            .setTitle(`${post.title}`)
            .setURL(`https://redd.it/${post.id}`)
            .setDescription(`${post.selftext}`)
            .setThumbnail(`${post.url}`)
            //.addField('field test','field description test')
            .setImage(`${post.url}`)
            .setFooter(`💬 ${post.num_comments} 👍 ${post.ups} 👎 ${final}`)
            const row = new Discord.MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId(`news`)
                .setLabel(`More news about glorious nation`)
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