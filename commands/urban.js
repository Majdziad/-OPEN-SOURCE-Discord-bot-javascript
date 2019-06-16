const Discord = require("discord.js");
const urban = module.require("urban");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
  if(args.length < 1) return message.channel.send("Please enter something.");
  let str = args.join(" ");

  urban(str).first(json => {
    if(!json) return message.channel.send("No results found. Please check the spelling of the word.");

    let embed = new Discord.RichEmbed()
      .setTitle(json.word)
      .setDescription(json.definition)
      .addField("Upvotes", json.thumbs_up, true)
      .addField("Downvotes", json.thumbs_down, true)
      .setColor(colors.gold)
      .setTimestamp()
      .setFooter(`Tertia BOT`, bot.user.displayAvatarURL);

    message.channel.send(embed);
  });


}

module.exports.help = {
    name: "urban"
}
