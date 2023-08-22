const Discord = require('discord.js')

const prefix = require('../config.json')

const guildModel = require('../models/guild')
const parents = require('../models/setupSchema')

const fs = require('fs');

module.exports = {
    name: 'setup',
    description: 'Says hello!',
    cooldown: 3,
    async execute(message, args, client) {

        /*    const parentStats = await message.guild.channels.create("📊 Serverstats 📊", {
        type: 'category'
    })*/
    const parentChannel2 = await message.guild.channels.cache.find(channel => channel.name === "📊 Serverstats 📊")

    if(!parentChannel2) {
        await parents.findOneAndDelete({guildID: message.guild.id}, async(err) => {
            if (err) console.log("err")
        })
    }

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Missing perms")


        parents.findOne({guildID: message.guild.id}, async(err, data) =>{
            if(err) console.log(err)
            if(!data){
                const parentChannel = await message.guild.channels.create("📊 Serverstats 📊", {
                    type: 'category'
                })
                let newParents = new parents({
                    guildID: message.guild.id,
                    channelID: parentChannel.id,
                })
                newParents.save()
                message.reply(":tools: Created channel!")
            } else {
                message.reply(":x: This channel still exists!")
                return undefined
            }
        })
            
        }
    
}