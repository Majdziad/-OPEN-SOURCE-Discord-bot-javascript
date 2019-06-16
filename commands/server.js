const Discord = require("discord.js");
const superagent = require("superagent");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Information")
  .setColor("#6a1515")
  .setThumbnail(sicon)
  .addField("Owner:", message.guild.owner)
  .addField("Server Name:", message.guild.name)
  .addField("Created On:", message.guild.createdAt)
  .addField("You Joined:", message.member.joinedAt)
  .addField("You Joined:", message.member.joinedAt)
  .addField("Your Role:", message.guild.roles)
  .addField("Total Members", message.guild.memberCount);
  return message.channel.send(serverembed);

}

module.exports.help = {
name: "server"
}
