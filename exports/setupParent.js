const parentModel = require('../models/setupSchema')

module.exports = async (message, args, client) => {
    const parentStats = await message.guild.channels.create("📊 Serverstats 📊", {
        type: 'category'
    })

    const parentDoc = new parentModel({
        guildID: message.guild.id,
        channelID: parentStats.id
    })

    await parentDoc.save()
}