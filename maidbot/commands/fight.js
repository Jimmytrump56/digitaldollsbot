const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'fight',
    async execute (client, message, args, Discord){
        const rando_imgs = [
            'https://tenor.com/view/paula-bgc-fight-stop-it-fight-ouch-gif-16796776',
            'https://tenor.com/view/fighting-bgc-camilla-gif-8836958',
            'https://tenor.com/view/bgc-mehgan-james-bad-girls-club-fight-gif-15940442',
            'https://tenor.com/view/bgc-fight-fighting-punch-gif-5223487',
            ] 

            imgss = rando_imgs[Math.floor(Math.random() * rando_imgs.length)]

            const member = message.mentions.users.first()

        const rando_msgs = [
                `${message.author} lost the fight against ${member}`,
                `${message.author} won the fight against ${member}`,
                ] 

                msgf = rando_msgs[Math.floor(Math.random() * rando_msgs.length)]

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