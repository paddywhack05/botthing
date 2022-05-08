const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "infuriatingslash",
description:"infuriatingslash command",
execute(interaction){
    fetch();
    function fetch(){
    redditFetch({
        subreddit:'mildyinfuriating',
        sort: 'top',
        allowNSFW: false,
    allowCrossPost: true,
        allowVideo: false,
        allowModPost: true,
     }).then(async post => {
        if(post.url.includes("gallery")){fetch();return;}
         if(post.upvote_ratio >= 0.90){
            var anser = 1.00-post.upvote_ratio;
           console.log(anser);
           var dwn = anser * post.ups;
           console.log(final);
           var final = Math.round(dwn);
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
               .setCustomId(`infuriating`)
               .setLabel(`Infuriating thing again`)
               .setStyle("SUCCESS"),
           )
           .addComponents(
            new MessageButton()
            .setLabel(`r/mildyinfuriating`)
            .setURL(`https://www.reddit.com/r/mildyinfuriating/`)
            .setStyle("LINK"),
        )
           //await interaction.reply({ content:`next meme`,component: [row]})
           await interaction.channel.send({ embeds: [embed],components: [row]});
            //message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
        }else {
            fetch();
        }  
    });
}}}