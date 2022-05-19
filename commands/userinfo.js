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
           async function e(){
               const Target = message.mentions.users.first()||message.author;
               const Member = message.guild.members.cache.get(Target.id)
           const embed = new Discord.MessageEmbed()
               .setColor(Member.displayHexColor||'RED')
               .setAuthor(`${Target.tag}`, Target.displayAvatarURL({ dynamic: true }))
               .setTitle(`${Target.username} information`)
               .setImage(`${Target.displayAvatarURL({ dynamic: true })}`)
               .setThumbnail(`${Target.displayAvatarURL({ dynamic: true })}`)
               .setURL(``)
               .setDescription(`**${Target.username} joined ${Member.guild} at** ${moment(Member.joinedAt).format('YYYY/MM/DD, h:mm:ss')}\n**Joined discord at** **Joined discord at** ${moment(Target.createdAt).format('YYYY/MM/DD, h:mm:ss')}\n**Nickname: ${Member.nickname}**\n**User id: ${Target.id}**\n**Role color: ${Member.displayHexColor}**\n`,"Roles",`${Member.roles.cache.map(r=>r).join(' ').replace("@everyone"," ")}`)
               /*.addField(`**${Target.username} joined ${Member.guild} at** ${moment(Member.joinedAt).format('YYYY/MM/DD, h:mm:ss')}`)
               /*.addField(`**Joined discord at** ${moment(Target.createdAt).format('YYYY/MM/DD, h:mm:ss')}`)
               .addField(`**Nickname: ${Member.nickname}**`)
               .addField(`**User id: ${Target.id}**`,false)
               .addField(`**Role color: ${Member.displayHexColor}`)*/
               .addField("Roles",`${Member.roles.cache.map(r=>r).join(' ').replace("@everyone"," ")}`)
               .setFooter(`paddycrack.com`)
              
            
             message.channel.send({ embeds: [embed]});
           
       }
    }
}