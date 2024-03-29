const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
module.exports= {
    name: "voteslash",
    description:"voteslash command",
    async execute(interaction,client){
       
            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setTitle(`Vote for us`)
                .setURL(`https://top.gg/bot/916743866915389542/vote`)
                .setDescription(`**[VOTE ON TOP.GG](https://top.gg/bot/916743866915389542/vote)** | **[VOTE ON DBL](https://discordbotlist.com/bots/paddycrackbot/upvote)**`)
                .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setFooter(`paddycrack.com`)
                const row = new Discord.MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setEmoji(`🤖`)
                    .setLabel(`Vote on Top.gg`)
                    .setURL(`https://top.gg/bot/916743866915389542/vote`)
                    .setStyle("LINK"),
                )
                .addComponents(
                    new MessageButton()
                    .setEmoji(`🤖`)
                    .setLabel(`Vote on DBL`)
                    .setURL(`https://discordbotlist.com/bots/paddycrackbot/upvote`)
                    .setStyle("LINK"),
                )
              interaction.reply({ embeds: [embed],components:[row]});
            
    }
}