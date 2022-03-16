module.exports= {
    name: "dice",
    description:"dice command",
    execute(message){
        const rndInt = Math.floor(Math.random() * 6) + 1
        message.reply ({content: "https://tenor.com/view/dice-roll-dice-roll-gif-23627860"})
        message.reply ({content: "rolling"})
        setTimeout(1000)
        if (rndInt == 1){
        message.reply ({content: "https://tenor.com/view/dice-roll-dice-roll-gif-23627860"})
        }
    }
}