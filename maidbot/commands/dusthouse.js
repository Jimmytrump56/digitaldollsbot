const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "dusthouse",
      async execute(client, message, args, Discord){ 


        iao = new MessageEmbed()
          .setTitle("Finished Dusting the House!")
          .setImage('https://www.treehugger.com/thmb/wY0ju4b55xfev1A88zGqUdH2VBo=/1000x650/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2018__09__cleaning-5a2b88796f2a48b09d33168208b5005b.jpeg')
          .setDescription(`${message.author} I finished dusting the house!`)
          message.channel.send({ embeds: [iao] });
      }
    }