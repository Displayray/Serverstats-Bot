const Discord = require('discord.js')

const prefix = require('../config.json')

const guildModel = require('../models/guild')
const vCH = require('../models/vchSchema')
const parents = require('../models/setupSchema')

const fs = require('fs');

module.exports = {
    name: 'verified',
    description: 'Says hello!',
    cooldown: 3,
    async execute(message, args, client) {


    const mCChannel2 = await message.guild.channels.cache.find(channel => channel.name.startsWith("Verified:"))
    const parentChannel2 = await message.guild.channels.cache.find(channel => channel.name === "📊 Serverstats 📊")

    if(!mCChannel2) {

        await vCH.findOneAndDelete({guildID: message.guild.id}, async(err) => {
            if (err) console.log("err")
        })
    }

    const parentChannel = await parents.findOne({ guildID: message.guild.id})
    if(!parentChannel) return message.channel.send("You need a parent where you can Store this Channel. To setup a Parent you can use 's!setup'!")

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Missing perms")


        vCH.findOne({guildID: message.guild.id}, async(err, data) =>{
            if(err) console.log(err)
            let verify = message.guild.verified

            if(!data){

                 const mCouChannel = await  message.guild.channels.create(`Verified: ${verify}`, {
                        permissionOverwrites: [
                            {
                                id: message.guild.id,
                                deny: ["CONNECT"]
                            }
                        ],
                        type: 'voice',
                        parent: `${parentChannel.channelID}`,
                })
                let newmCountChannel = new vCH({
                    guildID: message.guild.id,
                    channelID: mCouChannel.id,
                })
                newmCountChannel.save()
                message.reply(":tools: Created channel!")
            } else {
                message.reply(":x: This channel still exists!")
                return undefined
            }
        })


    }
}