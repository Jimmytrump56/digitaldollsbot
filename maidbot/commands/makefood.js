const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "makefood",
      async execute(client, message, args, Discord){ 
        const rando_imgs = [
          'https://images.squarespace-cdn.com/content/v1/5330918ce4b09837d5a2599b/1405978347177-5L2ZVFBXGAQZVVC8UNEU/image-asset.jpeg',
          'https://www.happyfamilyorganics.com/wp-content/uploads/2018/08/126-Strategies-for-creating-a-healthy-kitchen_182307536.jpg',
          'https://cdn.discordapp.com/attachments/749761129990848552/957667479235223562/248384-1600x1030-gourmet-food.png',
          'https://www.thespruceeats.com/thmb/0entgFbQY6Wo-ES6Mkr8rQK5K6M=/1916x1437/smart/filters:no_upscale()/GettyImages-480379752-588cb5de3df78caebc869bcf.jpg',
          ] 

          imgss = rando_imgs[Math.floor(Math.random() * rando_imgs.length)]

          iao = new MessageEmbed()
          .setTitle("Made food!")
          .setImage('https://www.treehugger.com/thmb/wY0ju4b55xfev1A88zGqUdH2VBo=/1000x650/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2018__09__cleaning-5a2b88796f2a48b09d33168208b5005b.jpeg')
          .setDescription(`${message.author} I have finished making your food!`)
          

          message.channel.send({ embeds: [iao] });
      }
    }