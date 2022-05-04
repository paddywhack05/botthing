const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
module.exports= {
    name: "voteslash",
    description:"voteslash command",
    execute(interaction,client){
       
            e();
            async function e(){
            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setTitle(`Vote for us on Top.gg`)
                .setURL(`https://top.gg/bot/916743866915389542`)
                .setDescription(`**[VOTE](https://top.gg/bot/916743866915389542)**`)
                .setThumbnail(`https://yt3.ggpht.com/I17eliiYPS0ibWEjnkLt5okgtwi4pAkT2ne0EQZYKTjEUoRwuH4dUf4MpgBI4I3QnCQXQTP_5Iw=s88-c-k-c0x00ffffff-no-rj`)
                .setImage('https://yt3.ggpht.com/I17eliiYPS0ibWEjnkLt5okgtwi4pAkT2ne0EQZYKTjEUoRwuH4dUf4MpgBI4I3QnCQXQTP_5Iw=s88-c-k-c0x00ffffff-no-rj')
                .setFooter(`paddycrack.com`)
              interaction.reply({ embeds: [embed]});
            
        }
    }
}