const { ExecutionContext } = require("puppeteer");

module.exports= {
    name: 'jokes/randomgifs',
    description:'when evr types bot !tell me a joke or random gif',
     execute(message, args){
        message.channel.send('gif image')
        }
}