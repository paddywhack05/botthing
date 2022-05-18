const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
const moment = require('moment');
module.exports= {
    name: "userinfo",
    description:"userinfo command",
    execute(message){
        if(!message.guild){
            console.log("dm detected")
            message.reply("You cant use this command in dms");
           }
           else{
           e();
       }
            e();
            async function e(){
            const embed = new Discord.MessageEmbed()
                .setColor(message.member.displayHexColor)
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(`${message.author.username} information`)
                .setURL(``)
                .setDescription(`**${message.author.username} joined ${message.member.guild} at** ${moment(message.member.joinedAt).format('YYYY/MM/DD, h:mm:ss')}\n**Joined discord at** ${moment(message.author.createdAt).format('YYYY/MM/DD, h:mm:ss')}\n **Nickname: ${message.member.nickname}** \n **User id: ${message.author.id}**\n **Role color: ${message.member.displayHexColor}**`)
                .setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)
                .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
                .setFooter(`paddycrack.com`)
               
             
              message.channel.send({ embeds: [embed]});
            
        }
    }
}