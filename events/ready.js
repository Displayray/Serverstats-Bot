const Discord = require('discord.js');
const db = require('mongoose');

const mCH = require('../models/mchSchema')
const ms = require('ms')

const moment = require('moment');
const mchSchema = require('../models/mchSchema');
require("moment-duration-format");




const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
}

module.exports = async(client) => {
    console.log(`Online mit ${client.user.tag}`)

    await db.connect('mongodb+srv://displayray:c7LxMM7DK6jLAMiX@clusterrayx.epsmw.mongodb.net/displayray?retryWrites=true&w=majority', dbOptions)
    .then(console.log('Mongo active'))

    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

    setInterval(() => {


        const statuses = [
            `s!help`,
            `In ${client.guilds.cache.size} Servers`,
            //`${client.users.cache.size} Members`,
            `Pre-Alpha-Version`
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING" })
    }, 15000)


}