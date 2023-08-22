const { Schema, model } = require('mongoose')

const roleCount = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('roleCount', roleCount)