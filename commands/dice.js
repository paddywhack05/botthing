module.exports= {
    name: "dice",
    description:"dice command",
    execute(message){
       
        message.reply ({content: "https://tenor.com/view/dice-roll-dice-roll-gif-23627860"})
        message.reply ({content: "rolling"})
       
        if (rndInt == 1){
            const rndInt = Math.floor(Math.random() * 6) + 1
            function wait() {
                message.reply ({content: "https://tenor.com/view/dice-roll-dice-roll-gif-23627860"})
                console.log('wait call');
              }
              setTimeout(wait,1000);
        }
    }
}