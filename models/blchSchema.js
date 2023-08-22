const { Schema, model } = require('mongoose')

const boostedlvl = Schema({
    guildID: String,
    channelID: String,
})

module.exports = model('boostedlevel', boostedlvl)