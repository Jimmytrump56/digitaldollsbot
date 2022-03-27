module.exports = {
    name: 'slap',
    async execute (client, message, args, Discord){
        const member = message.mentions.users.first()
            if(member){
                return message.reply(`You slapped ${member}! https://giphy.com/gifs/slap-slapping-zvDT09xBhcuMo`)
            }
            if(!member){
               return message.reply("You cant just slap no one!")
            } if(member === message.author){
                return message.reply("Oops accidently slapped yourself!")
             }
        }
    }