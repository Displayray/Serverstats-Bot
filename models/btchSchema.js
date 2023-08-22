const { Schema, model } = require('mongoose')

const boosts = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('boosts', boosts)