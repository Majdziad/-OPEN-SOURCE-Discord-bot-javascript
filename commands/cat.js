const Discord = require("discord.js");
const snek = module.require("snekfetch");
const api = "http:\/\/aws.random.cat\/meow";
const superagent = require("superagent");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating...");

  let file = (await snek.get(api)).body.file;
  //if the api is broken, this message would be send
  if(!file) return message.channel.send("Broken")

  await message.channel.send({files: [
    {
      attachment: file,
      name: file.split("/").pop()

    }
  ]});

  msg.delete();

}

module.exports.help = {
    name: "cat"
}
