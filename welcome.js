const Discord = require('discord.js');

module.exports = (client) => {
    
    const channelid = '860470187350163486' //channel de bienvenue nainventure

    client.on('guildMemberAdd', (member) => {

        member.roles.add('853597724992602142') //role worker

        const embed = new Discord.MessageEmbed()
                .setColor('ffee05')
                .setTitle('👋 Un nouveau membre nous rejoint')
                .setDescription(`Bienvenue à toi, <@${member.id}> sur le serveur **𝔼𝕩𝕠𝕥𝕚𝕔** ! \n \nViens parler avec nous dans ce channel : <#860470002578882570> :)`)
                const channel = member.guild.channels.cache.get(channelid)
                channel.send(embed);
    })
}