import DiscordJS, { Intents } from 'discord.js'
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
})

client.on('messageCreate', (message) => {

    if(message.author.bot){
        return;
    }
    if (message.content === 'hi bot'|| message.content === 'Hi bot') {
        message.reply({
            content: 'hi bot',
            
        })
    }
})


client.login(process.env.TOKEN)
