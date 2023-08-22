const { Schema, model } = require('mongoose')

const guildOwner = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('guildOwner', guildOwner)