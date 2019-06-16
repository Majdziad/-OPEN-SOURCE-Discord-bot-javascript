const Discord = require("discord.js");
const snek = module.require("snekfetch");
const api = "https://dog.ceo/api/breeds/image/random";
const superagent = require("superagent");
const colors = require("../colors.json");

  module.exports.run = async (bot, message, args) => {
      let msg = await message.channel.send("Generating...")

      let {body} = await superagent
      .get(`https://dog.ceo/api/breeds/image/random`)
      if(!{body}) return message.channel.send("I broke! Try again.")

          let dEmbed = new Discord.RichEmbed()
          .setColor(colors.gold)
          .setImage(body.message)
          .setTimestamp()
          .setFooter(`Tertia BOT`, bot.user.displayAvatarURL)

          message.channel.send({embed: dEmbed})

          msg.delete();
  }

module.exports.help = {
  name: "dog",
  description: "Sends a picture of a dog!",
  usage: "!dog",
  accessableby: "Members",
  aliases: ["doggo", "puppy"]
}
