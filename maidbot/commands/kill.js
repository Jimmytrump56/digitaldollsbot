module.exports = {
    name: 'kill',
    async execute (client, message, args, Discord){
        const member = message.mentions.users.first()
        const rando_imgs = [
            `You payed Lizo to crush ${member}! https://media.giphy.com/media/EoYJ8nUzAy4j6/giphy.gifhttps://giphy.com/gifs/brits-brit-awards-brits-2020-MBP4Fh3txYp89e4T7G`,
            `You got Carole Baskin to feed ${member} to her tigers! https://giphy.com/gifs/cameo-carole-baskin-Ptuibzjft6Ud6mBeu6`,
            `You said that Nicki Minaj wouldn't sit on ${member}'s face and she did and then they sufficated! https://giphy.com/gifs/nicki-minaj-onika-maraj-gif-11LB9LJ6VVyuxG`,
            ] 
            if(member){
            message.channel.send(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            } if(!member){
                return message.reply("You have to kill someone to use the kill command!")
            } if(member === message.author){
                return message.reply("You are loved you can't hurt yourself.")
            }
        }
    }