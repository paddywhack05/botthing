const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
module.exports= {
    name: "userinfo",
    description:"userinfo command",
    execute(message){
       
            e();
            async function e(){
            const embed = new Discord.MessageEmbed()
                .setColor(message.member.displayHexColor)
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(`${message.author.username} information`)
                .setURL(``)
                .setDescription(`**${message.author.username} joined ${message.member.guild} at** ${message.member.joinedAt}\n **Nickname: ${message.member.nickname}** \n **User id: ${message.author.id}**\n **Role color: ${message.member.displayHexColor}**`)
                .setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)
                .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
                .setFooter(`paddycrack.com`)
               
             
              message.channel.send({ embeds: [embed]});
            
        }
    }
}