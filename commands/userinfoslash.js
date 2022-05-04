const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
module.exports= {
    name: "userinfoslash",
    description:"userinfo command",
    execute(interaction){
       
            e();
            async function e(){
            const embed = new Discord.MessageEmbed()
                .setColor(interaction.member.displayHexColor)
                .setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setTitle(`${interaction.user.username} information`)
                .setURL(``)
                .setDescription(`**${interaction.user.username} joined ${interaction.member.guild} at** ${interaction.member.joinedAt}\n **Nickname: ${interaction.member.nickname}** \n **User id: ${interaction.user.id}**\n **Role color: ${interaction.member.displayHexColor}**`)
                .setImage(`${interaction.user.displayAvatarURL({ dynamic: true })}`)
                .setThumbnail(`${interaction.user.displayAvatarURL({ dynamic: true })}`)
                .setFooter(`paddycrack.com`)
               
             
              interaction.reply({ embeds: [embed]});
            
        }
    }
}