const { Schema, model } = require('mongoose')

const botCount = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('botCount', botCount)