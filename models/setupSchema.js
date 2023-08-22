const { Schema, model } = require('mongoose')

const parent = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('parent', parent)