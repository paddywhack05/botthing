const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
module.exports= {
    name: "dcslslash",
    description:"dcslslash command",
    execute(interaction,client){
        e();
        async function e(){
        const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
            .setTitle(`Dcsl`)
            .setURL(`https://dcsl.tk`)
            .setDescription(`**[Latest song](https://youtu.be/jiXf3NzZOTA)**\n\n **SOCIALS**\n **[Youtube](https://www.youtube.com/channel/UC5Yic5Wio4klMgpdRzA9qeQ)** | **[Website](https://dcsl.tk)**`)
            .setThumbnail(`https://yt3.ggpht.com/OzqCrvEc187vtkfwQtHq0WIU8l-eE5ZwVB3IVcTA2Nr8gGVj9hsZ1ekyyrrU1K6-xsPGJQFDiw=s88-c-k-c0x00ffffff-no-rj`)
            .setFooter(`dcsl.tk`)
            const row = new Discord.MessageActionRow()
            .addComponents(
                new MessageButton()
                .setEmoji(`🌐`)
                .setLabel(`Website`)
                .setURL(`https://dcsl.tk`)
                .setStyle("LINK"),
            )
            .addComponents(
                new MessageButton()
                .setEmoji(`📽`)
                .setLabel(`Youtube`)
                .setURL(`https://www.youtube.com/channel/UC5Yic5Wio4klMgpdRzA9qeQ`)
                .setStyle("LINK"),
            )
         
          await interaction.channel.send({ embeds: [embed],components: [row]});
    }
}
}