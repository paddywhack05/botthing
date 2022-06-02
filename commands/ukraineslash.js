const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
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
       }).then(async post => {
           console.log(post.length);
           if (post.selftext.length >= 256){ 
           fetch();
        return; }
        if (post.title.length >= 256){ 
            fetch();
         return; }
           if(post.upvote_ratio >= 0.90){
           // var anser = post.ups / post.upvote_ratio/100;
           // console.log(anser);
           //var final = Math.round(anser);
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
                .setCustomId(`ukraine`)
                .setLabel(`More about glorious nation`)
                .setStyle("SUCCESS"),
            )
            .addComponents(
                new MessageButton()
                .setLabel(`r/ukraine`)
                .setURL(`https://www.reddit.com/r/ukraine/`)
                .setStyle("LINK"),
            )
            //await interaction.reply({ content:`next meme`,component: [row]})
            
               await interaction.reply({ embeds: [embed], components: [row]});
               
            //message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
            }else if(post.upvote_ratio <= 0.89) {
                fetch();
            }  
         });
}
}}
