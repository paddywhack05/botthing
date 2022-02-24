import DiscordJS, { BaseGuild, Guild, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('IT is ready the bot')

    client.user.setActivity("bot",{type: "being a"})
})

client.on('messageCreate', (message) => {

    if(message.author.bot){
        return;
    }
   // if (Guild.name ===)

    if (message.content === 'Up, Up, Down, Down, Left, Right, Left, Right, B, A'|| message.content === 'up, up, down, down, left, right, left, right, b, a'|| message.content === "Up Up Down Down Left Right Left Right B A"|| message.content === "up up down down left right left right b a") {
        message.reply({
            content: 'hello '+ message.author.username,
            
        })
    }
    if (message.content === 'hi bot'|| message.content === 'Hi bot') {
        message.reply({
            content: 'hello '+ message.author.username,
            
        })
    }

    if (message.content=== "guild id"){
        message.reply({
            content : "here you go" + message.author.avatar + BaseGuild
        })
    }
})


client.login(process.env.TOKEN)
