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

    client.user.setActivity("bot",{type: "being a"})
})

client.on('messageCreate', (message) => {

    if(message.author.bot){
        return;
    }

   // if (!message.channel === "🤖bot-commands🤖") {
     //   message.reply({content: "go to bot commands if you want to use me"})
      //  return;
 //   }

   // if (message.content === 'hi bot'|| message.content === 'Hi bot') {
      //  message.reply({
          //  content: "your codes have no power here "+ message.author.username,
        
      //  })
    if (message.content === 'hi bot'|| message.content === 'Hi bot') {
        message.reply({
            content: 'hello '+ message.author.username,
            
        })
    }
})


client.login(process.env.TOKEN)
