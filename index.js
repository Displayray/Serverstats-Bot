/*const execSync = require("child_process").exec
execSync("npm i discord-xp", { encoding: "utf-8" })*/

const Discord = require('discord.js')
const client = new Discord.Client()
const { token, prefix } = require('./config.json')
const fs = require('fs')
const vCCH = require('./models/vcchSchema')
const tCCH = require('./models/tcchSchema')
const rCH = require('./models/rchSchema')
const mCH = require('./models/mchSchema')
const oCH = require('./models/ochSchema')
const regCH = require('./models/regionSchema')
const ecCH = require('./models/emchSchema')
const vCH = require('./models/vchSchema')
const btCH = require('./models/btchSchema')
const blCH = require('./models/blchSchema')
const bCH = require('./models/bchSchema')
const cCH = require('./models/cchSchema')
const parents = require('./models/setupSchema')
//const guild = require('./models/guild')
const { Collection } = require('mongoose')


//req for update
function wait(ms) {
    return new Promise(res => setTimeout(res, ms));
}

//console.log after the updates
client.on('ready', async () => {
    setInterval(() => {
        console.log("-------------------")
    }, 43200000)//30000, 24 hrs => 86400 secs, => 86400000 / 43200000
})

//update parent
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await parents.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await parents.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName("📊 Serverstats 📊")
            await wait(1000)
        })
        

        console.log("updated parent", channelids)
    }, 43200000)

})

//update membercount
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await mCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await mCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Members: ${guild_1.members.cache.filter(member => !member.user.bot).size}`)
            await wait(1000)
        })
        

        console.log("updated membercount", channelids)
    }, 43200000)

})

//update botcount
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await bCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await bCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Bots: ${guild_1.members.cache.filter(member => member.user.bot).size}`)
            await wait(1000)
        })
        

        console.log("updated botcount", channelids)
    }, 43200000)

})

//update channelcount
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await cCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await cCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Channels: ${guild_1.channels.cache.size}`)
            await wait(1000)
        })
        

        console.log("updated channelcount", channelids)
    }, 43200000)

})

//update textchannelcount
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await tCCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await tCCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Text Channels: ${guild_1.channels.cache.filter(channel => channel.type === "text").size}`)
            await wait(1000)
        })
        

        console.log("updated channelcount", channelids)
    }, 43200000)

})

//update voicechannelcount
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await vCCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await vCCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Voice Channels: ${guild_1.channels.cache.filter(channel => channel.type === "voice").size}`)
            await wait(1000)
        })
        

        console.log("updated channelcount", channelids)
    }, 43200000)

})

//update rolechannelcount
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await rCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await rCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Roles: ${guild_1.roles.cache.size - 1}`)
            await wait(1000)
        })
        

        console.log("updated rolecount", channelids)
    }, 43200000)

})

//update verified
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await vCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await vCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Verified: ${guild_1.verified}`)
            
            await wait(1000)
        })
        

        console.log("updated verified", channelids)
    }, 43200000)

})

//update Boosted LVL
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await blCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await blCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Boost level: ${guild_1.premiumTier}`)
            
            await wait(1000)
        })
        

        console.log("updated verified", channelids)
    }, 43200000)

})

//update owner
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await oCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await oCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Owner: ${guild_1.owner.user.username}`)
            
            await wait(1000)
        })
        

        console.log("updated verified", channelids)
    }, 43200000)

})

//update boosts
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await btCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await btCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Boosts: ${guild_1.premiumSubscriptionCount || '0'}`)
            
            await wait(1000)
        })
        

        console.log("updated boosts", channelids)
    }, 43200000)

})

//update region
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await regCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await regCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Region: ${guild_1.region}`)
            
            await wait(1000)
        })
        

        console.log("updated region", channelids)
    }, 43200000)

})

//update emojicount
client.on('ready', async () => {

    

    setInterval(async () => {
        var channelids = []
        var guildids = []
        await ecCH.find({}).then(async collection => {
            collection.forEach(document => {
                channelids.push(document.channelID)
                guildids.push(document.guildID)
            })
        })
        
        channelids.forEach(async channelID => {
            const result = await ecCH.findOne({
                channelID: channelID,
              });
            //console.log("guildID", result.guildID)
              
            const guild_1 = client.guilds.cache.get(result.guildID)
            const exist = client.channels.cache.get(channelID)
            if(exist) exist.setName(`Emojis: ${guild_1.emojis.cache.size}`)
            
            await wait(1000)
        })
        

        console.log("updated emojicount", channelids)
    }, 43200000)

})





//command handler
client.commands = new Discord.Collection()
client.cooldowns = new Discord.Collection()

const tagFiles = fs.readdirSync('./tags').filter(f => f.endsWith('.js'))
    for(const file of tagFiles) {
        const tag = require(`./tags/${file}`)
        client.commands.set(tag.name, tag)
    }

const helpFiles = fs.readdirSync('./help').filter(f => f.endsWith('.js'))
    for(const file of helpFiles) {
        const help = require(`./help/${file}`)
        client.commands.set(help.name, help)
    }

fs.readdir('./events/', (err, files) => {
    if (err) return console.log(err)
    files.forEach(file => {
        if(!file.endsWith(".js")) return
        const event = require(`./events/${file}`)
        const eventName = file.split(".")[0]
        client.on(eventName, event.bind(null, client))
        delete require.cache[require.resolve(`./events/${file}`)]
    })
})

//help 
client.on('message', async message => {
if (message.content === '<@!768136244818870353>') {
    if(message.author.bot) return
    message.reply("My Prefix is: `s!`\nTo get a list of all commands or help you can use `s!help`\nTo contact us you can use `s!contact (text)`")
    return undefined
}
})

//new guild
client.on("guildCreate", guild => {
    const embedNew = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
    .setURL("https://discord.gg/RHBjbkvbqb")
    .setImage(guild.iconURL({format: "gif"}))
    .setAuthor(client.user.tag, client.user.avatarURL())
    .setTitle("Thanks for adding me to the Server 🎉🎉🎉!")
    .setDescription("Here is a quick guide how the Bot works and how you can set-up your server!")
    .addField("Serverstats Bot", "This Bot is created by __RayX__!")
    .addField("What is this Bot about?", "This Bot is a Bot which shows your Serverstats as a Channel-Name.\nIt can count your Members, Bots, any type or all channels, boosted level...\nTo keep the stats as updated as it can, the statschannels will be updated every 24hrs.\nThat means it dont updates the Membercount when someone joins your server, it will update the counter every 24hrs.\nWe need to do this because we wont slow down the Discord Servers!")
    .addField("Quick Guide", "To set-up the server you have to type `s!setup`! Then it will create a Parent where the Bot will store any new Channels.\nTo get a list of the Command you can type `s!help`!")
    .setFooter("Serverstats Bot | Dev: Displayray")


    if(guild.systemChannel) {
    guild.systemChannel.send(embedNew)
    }
    try {
    guild.owner.send(embedNew)
    } catch (err) {
        console.log(err)
    }

    const Displayray = client.users.cache.get("465462991840739341")
    Displayray.send(`New Guild/ Neuer Server!\nServername: ${guild.name}\nOwner: ${guild.owner.user.tag}\nMembers: ${guild.memberCount}`)
})

client.login(token)