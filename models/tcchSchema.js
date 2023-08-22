const { Schema, model } = require('mongoose')

const textChannelCount = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('textChannelCount', textChannelCount)