const Discord = require("discord.js")

module.exports = {
    name: 'help',
    description: 'donne toutes les commandes',
    async execute(message, args) {
        const embedhelp = new Discord.MessageEmbed()
        .setColor('ffee05')
        .setTitle("Toutes les commandes du bot !")
        .addFields(
            { name: '>clear [_nombres de message_]', value: 'supprime un nombre de messages données'},
            { name: ">kick [_mention d'une personne_]", value: "expulse un membre du serveur"},
            { name: '>p ou >play [_nom of the song_]', value: 'joue la musique de ton choix'},
            { name: '>p clear', value: "vide la file d'attente du bot"},
            { name: '>p skip', value: "skip la musique actuelle"},
            { name: '>p stop', value: 'déconnecte le bot du vocal'},
            { name: ">pfp [_mention d'une personne_]", value: "récupère la photo de profil d'un membre"},
            { name: '>ping', value: 'check si le bot est online'},
            { name: '>slowmode [_temps en secondes_]', value: "change le slowmode du channel"},
            { name: '>uptime', value: 'savoir depuis combien de temps le bot est connecté'},
        )
        message.channel.send(embedhelp);
    }
}
