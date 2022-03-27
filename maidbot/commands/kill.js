module.exports = {
    name: 'kill',
    async execute (client, message, args, Discord){
        const member = message.mentions.users.first()
        const rando_imgs = [
            `You payed Lizo to crush ${member}! https://media4.giphy.com/media/MBP4Fh3txYp89e4T7G/giphy.gif?cid=790b761192bd856a038116c1222a84f565a786d25327b7bd&rid=giphy.gif&ct=g`,
            `You got Carole Baskin to feed ${member} to her tigers! https://media2.giphy.com/media/Ptuibzjft6Ud6mBeu6/giphy.gif?cid=790b7611dec1716f0cef03b1d9fe682fb416c2b86d2845eb&rid=giphy.gif&ct=g`,
            `You said that Nicki Minaj wouldn't sit on ${member}'s face and she did and then they sufficated! https://media2.giphy.com/media/11LB9LJ6VVyuxG/giphy.gif?cid=790b7611feabbfef996adc6ec2bb9e25c59f20af2d2b04a3&rid=giphy.gif&ct=g`,
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