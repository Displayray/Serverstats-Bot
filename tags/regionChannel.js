const Discord = require('discord.js')

const prefix = require('../config.json')

const regCH = require('../models/regionSchema')
const parents = require('../models/setupSchema')

const fs = require('fs');

module.exports = {
    name: 'region',
    description: 'Says hello!',
    cooldown: 3,
    async execute(message, args, client) {


    const mCChannel2 = await message.guild.channels.cache.find(channel => channel.name.startsWith("Region:"))
    const parentChannel2 = await message.guild.channels.cache.find(channel => channel.name === "📊 Serverstats 📊")

    if(!mCChannel2) {
        await regCH.findOneAndDelete({guildID: message.guild.id}, async(err) => {
            if (err) console.log("err")
        })
    }

    const parentChannel = await parents.findOne({ guildID: message.guild.id})
    if(!parentChannel) return message.channel.send("You need a parent where you can Store this Channel. To setup a Parent you can use 's!setup'!")

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Missing perms")


        regCH.findOne({guildID: message.guild.id}, async(err, data) =>{
            if(err) console.log(err)
            if(!data){
                const mCouChannel = await message.guild.channels.create(`Region: ${message.guild.region}`, {
                    permissionOverwrites: [
                        {
                            id: message.guild.id,
                            deny: ["CONNECT"]
                        }
                    ],
                    type: 'voice',
                    parent: `${parentChannel.channelID}`,
                })
                let newmCountChannel = new regCH({
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