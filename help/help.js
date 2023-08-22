const Discord = require('discord.js')
const prefix = require('../config.json')

module.exports = {
    name: 'help',
    description: 'Sends help!',
    aliases: ['h'],
    cooldown: 3,
    async execute(message, args, client) {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setThumbnail(client.user.avatarURL())
        .setAuthor(client.user.tag)
        .setTitle(":gear: Help Panel!")
        .setDescription(`**Prefix:** **\`s!\`**\n**Version: Pre-Alpha**`)
        .addField("\u200b", "\u200b")
        .addField("**》__SETUP COMMANDS__**", "\u200b")
        .addField("`s!setup`:", "Setup a parent where the Bot stores the Channels.")
        .addField("`s!botcount`:", "Sets up a channel which shows how many bots are in your server!")
        .addField("`s!boosts`:", "Sets up a channel which show how many boosts your server have!")
        .addField("`s!boostlevel`:", "Sets up a channel which shows wich Level your server is!")
        .addField("`s!channelcount`:", "Sets up a channel which shows how many channels are in your server!")
        .addField("`s!emojicount`:", "Sets up a channel which shows how many emojis your server have!")
        .addField("`s!membercount`:", "Sets up a channel which shows how many humans are in your server!")
        .addField("`s!owner`:", "Sets up a channel which shows the server owner!")
        .addField("`s!rolecount`:", "Sets up a channel which shows how many roles are in your server!")
        .addField("`s!textchannelcount`:", "Sets up a channel which shows how many text-channels are in your server!")
        .addField("`s!verified`:", "Sets up a channel which shows if your server is verified!")
        .addField("`s!voicechannelcount`:", "Sets up a channel which shows how many voice-channels are in your server!")

        const helpEmbed2 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .addField("**》__OTHER COMMANDS__**", "\u200b")
        .addField("`s!help`:", "Sends this panel!")
        .addField("`s!serverinfo`:", "Sends some infos about the server!")
        .addField("`s!invite`:", "Sends the link to invit the bot to any server!")
        .addField("\u200b", "\u200b")
        .addField("Contact us!", "Report errors, bugs, or submit a request to support!\n`s!contact (text)`\nOr join our Support Server:\nhttps://discord.gg/RHBjbkvbqb")
        await message.channel.send(helpEmbed)
        await message.channel.send(helpEmbed2)
        return undefined
    }
}