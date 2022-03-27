module.exports = {
    name: 'weavesnatch',
    async execute (client, message, args, Discord){
        const member = message.mentions.users.first()
            if(member){
                return message.reply(`You snatched ${member}'s weave! https://giphy.com/gifs/anjelahjohnson-wig-weave-anjelah-XbJ1CmzVPLbsAAtNV0`)
            }
            if(!member){
               return message.reply("You cant just weave snatch no one!")
            } if(member === message.author){
                return message.reply("Your hair is real (DONT EXPOSE YOURSELF!)!")
             }
        }
    }