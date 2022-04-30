const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
const{MessageActionRow,MessageButton} = require('discord.js');
module.exports= {
name: "redditslash",
description:"redditslash command",
async execute(interaction,client,text){
        fetch();
    async function fetch(){
    redditFetch({
        
        subreddit:`${text}`,
        sort: 'top',
        allowNSFW: false,
    allowCrossPost: true,
        allowVideo: true,
        allowModPost: false,
        
     }).then(async post => {
        // console.log(post);
         
        
             if(post.is_video){fetch();return;}
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
           
//upvotes divided by upvote ratio = kinda of down votes
            //await interaction.reply({ content:`next meme`,component: [row]})
            await interaction.channel.send({ embeds: [embed]});
            console.log(`dwn ${post.downs} \n ups${post.upvote_ratio} \n real downs ${anser}`)
            //message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
           
         }else {
             fetch();
         }
     
         
     });
  
}
}}