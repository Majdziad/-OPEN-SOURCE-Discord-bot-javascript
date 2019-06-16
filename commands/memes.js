const Discord = require("discord.js");
const snek = module.require("snekfetch");
const api = "https://dog.ceo/api/breeds/image/random";
const superagent = require("superagent");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`https://api.imgflip.com/get_memes`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let mEmbed = new Discord.RichEmbed()
        .setColor(colors.gold)
        .setImage(body.get)
        .setTimestamp()
        .setFooter(`Tertia BOT`, bot.user.displayAvatarURL)

        message.channel.send({embed: mEmbed})

        msg.delete();
}


module.exports.help = {
    name: "memes",
    noalias: "No Aliases",
    description: "Sends a meme from a website!",
    usage: "!meme",
    accessableby: "Members",
    aliases: []
}
