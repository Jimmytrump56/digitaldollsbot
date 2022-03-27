const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'makebed',
    async execute (client, message, args, Discord){
        const rando_imgs = [
            'https://m.media-amazon.com/images/I/71QOPxIJumL._AC_SX355_.jpg',
            'https://amaliahomecollection.com/wp-content/uploads/2019/01/2-3-692x391.png',
            'https://images.ctfassets.net/ltric1hkjv72/1idVFBlydX4JP6MPssTYvL/5f7e2c7e978b524bc71ecf3ef71798b2/Why-Making-Your-Bed-Matters_Hero_Reotuched.jpg',
            'https://media.istockphoto.com/photos/luxury-bed-in-a-large-neoclassical-bedroom-with-decorative-niche-picture-id619643414',
            'https://royalzig.com/wp-content/uploads/2020/06/Luxury-bedroom.jpg',
            ] 

            imgss = rando_imgs[Math.floor(Math.random() * rando_imgs.length)]

          iao = new MessageEmbed()
          .setTitle("Made bed!")
          .setImage(imgss)
          .setDescription(`${message.author} I have finished making your bed!`)

          message.channel.send({ embeds: [iao] });
    }
  }