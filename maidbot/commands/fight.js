const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'fight',
    async execute (client, message, args, Discord){
        const rando_imgs = [
            'https://media.giphy.com/media/EoYJ8nUzAy4j6/giphy.gif',
            'https://media.giphy.com/media/kGCoCHSsHrkXe/giphy.gif',
            'https://media.giphy.com/media/X6BsrIYqXaY3S/giphy.gif',
            'https://media.giphy.com/media/hH9IstBk0muNq/giphy.gif',
            ] 

            imgss = rando_imgs[Math.floor(Math.random() * rando_imgs.length)]

            const member = message.mentions.users.first()

        const rando_msgs = [
                `${message.author} lost the fight against ${member}`,
                `${message.author} won the fight against ${member}`,
                ] 

                msgf = rando_msgs[Math.floor(Math.random() * rando_msgs.length)]

                if(member === message.author){
                    return message.reply("You cant fight yourself!")
                }
                if(member === client.user.id){
                    const youCantFIGHTMEIMGOD = new MessageEmbed
                    .setTitle("You thought!")
                    .setDescription("You cant fight me...IM GOD!")
                    .setImage("https://media.giphy.com/media/yXHStkBzabJ8dilHSR/giphy.gif")
                    message.channel.send({ embeds: [youCantFIGHTMEIMGOD] });
                    return;
                }
                if(member){
                    iao = new MessageEmbed()
                    .setTitle("FIGHT!")
                    .setImage(imgss)
                    .setDescription(`${msgf}`)
          
                    message.channel.send({ embeds: [iao] });
        } if(!member){
            return message.reply("You cant just fight yourself you dumbass!");
        }
    }

}