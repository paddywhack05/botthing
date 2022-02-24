import DiscordJS, { BaseGuild, Guild, GuildBan, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
// what my discord bot needs from discord
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_PRESENCES,

    ]
})
//ready message
client.on('ready', () => {
    console.log('IT is ready the bot')
   
    //what my bots doing

})
//when message create event
client.on('messageCreate', (message) => {

    if(message.author.bot){
        return;
    }

                //konami code command
    if (message.content === 'Up, Up, Down, Down, Left, Right, Left, Right, B, A'|| message.content === 'up, up, down, down, left, right, left, right, b, a'|| message.content === "Up Up Down Down Left Right Left Right B A"|| message.content === "up up down down left right left right b a") {
        message.reply({
            content: 'your codes have no power hear '+ message.author.username,
            
        })
    }
                    //hi command
    if (message.content === 'hi bot'|| message.content === 'Hi bot') {
        message.reply({
            content: 'hello '+ message.author.username,
            
        })
    }

   
    
})

// my discord bot login with token in the env file
client.login(process.env.TOKEN)
