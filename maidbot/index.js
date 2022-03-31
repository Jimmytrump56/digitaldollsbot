const Discord = require('discord.js');
const {Client, Intents} = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
    partials: ['MESSAGE','REACTION','CHANNEL','USER']
})
const fs = require('fs');

client.warns = new Discord.Collection();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', () =>{
client.user.setActivity(' to your every command!', {type: "LISTENING"})
})


const bannedwords = [
    "Faggot",
    "Fag",
    "nigger",
    "nigga",
    "you monkey",
    "Kill yourself",
    "gay",
    "gae",
    "girls can't",
    "girls cant",
    "beaner",
]

client.on('message', message => {
    for (let i in bannedwords) {
        if(message.content.toLowerCase().includes(bannedwords[i])){
            message.delete();
        }
    }
})

client.login('OTU3NjczOTQ1MzMzNjI5MDYw.YkCNXQ.32r5oI-VHRkAGICtquYdNQFHXAs');