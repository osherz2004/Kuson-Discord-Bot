// Import Discord & bot
const Discord = require('discord.js')
const client = new Discord.Client()

// Import ytdl-core
const ytdl = require("ytdl-core")
const streamOptions = { seek: 0, volume: 1 }

// Import .env
require('dotenv').config()

// When the bot turned on
client.on('ready', () => {

    client.user.setActivity('Porn', {type: 'WATCHING'})

    // Logs all the server and channels the bot is connected to
    client.guilds.forEach(guild => {
        console.log(guild.name)
        guild.channels.forEach(channel => console.log(`- ${channel.name} ${channel.type} ${channel.id}`))
    })
})

function randomDamn() {

    let n = Math.floor(Math.random() * 10)
    
    const arr = [
        "אמא שלך זונה יבן זונה",
        "יבן שרמוטה אני אזיין אותך",
        "שתוק יהומו מזדיין אוכל בתחת",
        "לך תזדיין יבן זונה",
        "אני מזיין את אמא שלך ואבא שלך זה הצלם יזין",
        "לאמא הזונה שלך יש כוס בטעם תות",
        "סתום תפה יהומו",
        "שתוק יהומו אוכל בתחת",
        "הדילדו מחכה לך בשירותים יהומו",
        "לך תמצוץ לכושים יבן זונה"
    ]

    return arr[n]
}

// When message sent
client.on('message', message => {

    if (message.author == client.user) return

    if (/זונה|זין|זיין|הומו|שרמוטה|גיי|קוקסינל|פאג/.test(message.content)) {
        message.channel.send(message.author + " " + randomDamn())
    }

    if (message.content.includes("מה לשים בתה")) {

        if (message.member.voiceChannel) {

            message.member.voiceChannel.join()

            .then(connection => {
                message.reply("אשכים בתה")
                const stream = ytdl('https://www.youtube.com/watch?v=gEP-6JNkZtI', { filter: "audioonly" })
                const dispatcher = connection.playStream(stream, streamOptions)
                dispatcher.on("end", () => message.member.voiceChannel.leave())

            })
            .catch(console.log())

        } else {
            message.reply("תתחבר לקולי כדי שאני אגיד לך מה לשים בתה")
        }
    }

})

client.login(process.env.TOKEN)