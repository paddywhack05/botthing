
const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');

module.exports= {
    name: "helpslash",
    description:"help slashcommand",
    execute(interaction,client){
        e();
        async function e(){
        const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
            .setTitle(`Paddycrackbot Help`)
            .setURL(``)
            .setDescription(`**COMMANDS**\n!meme, !infuriating, !cat, !dog, !minecraft, !dankmeme,\n !ukraine, !ukraine news, do a barrel roll, !rickroll !hack, !ascii !vote, !invite, !info, !userinfo\n\n**DOCUMENTATION**\n**Type /** to view the slash command options or **[look at the documentation](https://paddycrack.com/bot)** to see what it all does\n\n **SOCIALS**\n **[Youtube](https://www.youtube.com/channel/UCmd3UCWz0LXd0CHQ0g6vQ4A) | [Twitch](https://www.twitch.tv/paddycrack_) | [Discord](https://discord.gg/yFZXQB8cjx)**\n\n**LINKS**\n**[Website](https://paddycrack.com) | [Github](https://github.com/paddywhack05/botthing) | [Top.gg](https://top.gg/bot/916743866915389542)**`)
            .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
            .setFooter(`paddycrack.com`)
            .setImage(`${client.user.displayAvatarURL({ dynamic: true })}`)
            const row = new Discord.MessageActionRow()
            .addComponents(
                new MessageButton()
                .setEmoji(`🌐`)
                .setLabel(`Website`)
                .setURL(`https://paddycrack.com`)
                .setStyle("LINK"),
            )
            .addComponents(
                new MessageButton()
                .setEmoji(`🛠`)
                .setLabel(`Support server`)
                .setURL(`https://discord.gg/Pd5rRpM9y9`)
                .setStyle("LINK"),
            )
         
          await interaction.reply({ embeds: [embed],components: [row]});
    }
   }
}