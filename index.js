import DiscordJS, { BaseGuild, Guild, GuildBan, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
// what my discord bot needs from discord
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
//ready message
client.on('ready', () => {
    console.log('IT is ready the bot')

    //what my bots doing
    client.on("ready",async()=> {
        let servers = await client.guilds.cache.size
        let servercount = await client.guilds.cache.reduce((a,b)=> a+b.memberCount,0 )

        const activities =[
            `?help | ${servers} servers`,
        ]

        setInterval(() =>{
            const status = activities[Math.floor(Math.random()*activities.length)]
            client.user.setPresence({activities:[{name: `${status}`}]})

        }, 5000)
    })
    client.user.setActivity("bot",{type: "being a"})
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
