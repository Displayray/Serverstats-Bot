const { Schema, model } = require('mongoose')

const emojicount = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('emojicount', emojicount)