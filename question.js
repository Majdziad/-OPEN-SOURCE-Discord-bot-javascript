const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {


    if (!args[2]) return message.reply("Please ask a full question.");
    let replies = ["Yes.", "No.", "I don't know.", "Ask a better question.", "Ask again later!", "No u!"];


    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let queembed = new Discord.RichEmbed()
        .setAuthor(message.author.tag) //tags the author
        .setColor(colors.gold) //color
        .addField("**Question**", question) //shows the question
        .addField("**Answer**", replies[result]) //answer result
        .setTimestamp()
        .setFooter(`Tertia BOT`, bot.user.displayAvatarURL);

    //sends the message
    message.channel.send(queembed);
}

module.exports.help = {
    name: "question",
    description: "Answers a question!",
    usage: "!question",
    accessableby: "Members",
    aliases: []
}