const { Schema, model } = require('mongoose')

const verified = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('verified', verified)