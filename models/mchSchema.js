const { Schema, model } = require('mongoose')

const memberCount = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('memberCount', memberCount)