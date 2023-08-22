const Discord = require('discord.js')
const prefix = require('../config.json')

module.exports = {
    name: 'contact',
    description: 'Sends help!',
    aliases: ["support"],
    cooldown: 3,
    async execute(message, args, client) {
        const inhalt = args.slice(1).join(" ")
        const contactchannel = client.channels.cache.get('769220666716192817')
        if(!contactchannel) return message.channel.send("**An Error occurred**: Cant find the Contactchannel! Please contact the Support on their Server!")
        message.channel.createInvite({ temporary: true, maxAge: 0 }).then (invite => contactchannel.send(`discord.gg/${invite.code}`))

        const embedcontact = new Discord.MessageEmbed()
        .setColor("NAVY")
        .setTitle("Contact / Support")
        .setDescription(`Thanks ${message.author} for using our Support!\nWe will help/reply as soon as possible!\n\nIf you have not received a response within 48 hours, please contact us directly on our server:\nhttps://discord.gg/RHBjbkvbqb`)
        .setFooter("Request was sent successfully!")
        
        const embedcontact2 = new Discord.MessageEmbed()
        .setColor("NAVY")
        .setAuthor(`${message.author.tag} - ${message.author.id}`, message.author.avatarURL())
        .setTitle("Contact / Support")
        .setDescription(inhalt)
        .addField("Invite:", `Nächste Nachricht!`)
        .addField("Channel Id", message.channel.id)
        .setFooter(`Anfrage von: ${message.guild.name}`, message.guild.iconURL())
        
        
        message.channel.send(embedcontact)
        return contactchannel.send(embedcontact2)
    }
}