const Discord = require('discord.js')

module.exports = {
    name: 'invite',
    cooldown: 3,
    async execute(message, args, client) {

        const inviteEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("BOT INVITE LINK")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=768136244818870353&permissions=8&scope=bot")
        .setDescription("[Serverstats Bot Invitelink](https://discord.com/api/oauth2/authorize?client_id=768136244818870353&permissions=8&scope=bot 'Serverstatsbot Invitelink!')")

        message.channel.send(inviteEmbed)
    }
}