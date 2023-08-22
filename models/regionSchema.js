const { Schema, model } = require('mongoose')

const region = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('region', region)