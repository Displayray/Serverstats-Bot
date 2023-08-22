const { Schema, model } = require('mongoose')

const voiceChannelCount = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('voiceChannelCount', voiceChannelCount)