const { Schema, model } = require('mongoose')

const channelCount = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('channelCount', channelCount)