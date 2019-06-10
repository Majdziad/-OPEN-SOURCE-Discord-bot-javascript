const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const rolled = Math.floor(Math.random() * 2) + 1;
    let headembed = new Discord.RichEmbed()
        .setAuthor(`Coin Flip`)
        .addField(`Result`, `You flipped a: **Heads**!`)
        .setThumbnail(`http://pngimg.com/uploads/coin/coin_PNG36903.png`)
        .setColor("0xff1053");
    let tailembed = new Discord.RichEmbed()
        .setAuthor(`Coin Flip`)
        .addField(`Result`, `You flipped a: **Tails**!`)
        .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/3/3c/Washington_Quarter_Silver_1944S_Reverse.png`)
        .setColor("0x00bee8");
    if (rolled == "1") {
            message.channel.send(tailembed);
        
    }
    else {
        message.channel.send(headembed);
    }
}
module.exports.help = {
    name: "bet"
}
