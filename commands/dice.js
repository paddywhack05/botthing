module.exports= {
    name: "dice",
    description:"dice command",
    execute(message){
        const diceroll = Math.floor(Math.random() * 6) + 1
        const dices = Math.floor(Math.random() * 6) + 1
        if (diceroll == 1){
            message.reply({content: 'https://imgur.com/a/YdAmiRe'})
        }
        if (diceroll == 2){
            message.reply ({content: "https://imgur.com/a/w35gKMR"})
        }
        if (diceroll == 3){
            message.reply ({content: "https://imgur.com/a/MkDVhQS"})
        }
        if (diceroll == 4){           
            message.reply ({content: "https://imgur.com/a/WCuaCbL"})
        }
        if (diceroll == 5){
            message.reply ({content: "https://imgur.com/a/0xyPIkx"})
        }
        if (diceroll == 6){
            message.reply ({content: "https://imgur.com/a/urv1H42"})
        }
        if (dices == 1){
            message.reply({content: 'https://imgur.com/a/YdAmiRe'})
        }
        if (dices == 2){
            message.reply ({content: "https://imgur.com/a/w35gKMR"})
        }
        if (dices == 3){
            message.reply ({content: "https://imgur.com/a/MkDVhQS"})
        }
        if (dices == 4){           
            message.reply ({content: "https://imgur.com/a/WCuaCbL"})
        }
        if (dices == 5){
            message.reply ({content: "https://imgur.com/a/0xyPIkx"})
        }
        if (dices == 6){
            message.reply ({content: "https://imgur.com/a/urv1H42"})
        }
        const ans = diceroll + dices;
        message.reply({content: "you got "+ ans})
    }
}