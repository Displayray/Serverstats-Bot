const Discord = require('discord.js')

module.exports = {
    name: 'serverinfo',
    cooldown: 3,
    async execute(message, args, client) {

        const siEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(message.author.tag)
        .setThumbnail(message.guild.iconURL())
        .setTitle(`SERVERINFO: `+ message.guild.name)
        .addField("**》__Serverinfo__**", "\u200b")
        .addField(`Name:`, `=> ${message.guild.name}`)
        .addField(`ID:`, `=> ${message.guild.id}`)
        .addField(`Owner:`,`=> ${message.guild.owner.user.tag} - ${message.guild.owner.id}`)
        .addField(`Region:`,`=> ${message.guild.region}`)
        .addField(`Boost Tier:`,`=> ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`)
        .addField(`Boost Level:`,`=> ${message.guild.premiumSubscriptionCount || '0'}`)
        .addField(`Verification Level:`,`=> ${message.guild.verificationLevel}`)
        .addField(`Content Filter:`,`=> ${message.guild.explicitContentFilter}`)
        .addField(`Created At:`,`=> ${message.guild.createdAt}`)
        
        .addField("\u200b", "\u200b")

        .addField("**》__Counter__**", "\u200b")
        .addField(`Humans:`,`=> ${message.guild.members.cache.filter(member => !member.user.bot).size}`)
        .addField(`Bots:`,`=> ${message.guild.members.cache.filter(member => member.user.bot).size}`)
        .addField(`Roles:`,`=> ${message.guild.roles.cache.size}`)
        .addField(`Channel:`,`=> ${message.guild.channels.cache.size}`)
        .addField(`Textchannel:`,`=> ${message.guild.channels.cache.filter(channel => channel.type === "text").size}`)
        .addField(`Voicechannel:`,`=> ${message.guild.channels.cache.filter(channel => channel.type === "voice").size}`)
        .addField(`Emoji:`,`=> ${message.guild.emojis.cache.size}`)
        .addField(`Regular Emojis:`,`=> ${message.guild.emojis.cache.filter(emoji => !emoji.animated).size}`)
        .addField(`Animated Emojis:`,`=> ${message.guild.emojis.cache.filter(emoji => emoji.animated).size}`)
           
        .addField("\u200b", "\u200b")
        
        .addField("**》__Presence__**", "\u200b")
        .addField(`Online:`,`=> ${message.guild.members.cache.filter(member => member.presence.status === "online").size}`)
        .addField(`Idle:`,`=> ${message.guild.members.cache.filter(member => member.presence.status === "idle").size}`)
        .addField(`Do not Disturb:`,`=> ${message.guild.members.cache.filter(member => member.presence.status === "dnd").size}`)
        .addField(`Offline:`,`=> ${message.guild.members.cache.filter(member => member.presence.status === "offline").size}`)
        
        .setTimestamp()
        .setFooter(`Serverstats Bot`)

        await message.channel.send(siEmbed)

    }
}