const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()

client.on('ready', () => {

    console.log('Connected as ' + client.user.tag);

    client.user.setActivity('Porn', {type: 'WATCHING'})

    const generalChannel = client.channels.get('582094422112468994')

    generalChannel.send('התחברתי ישרמוטות')

    client.guilds.forEach(guild => {
        console.log(guild.name)
        guild.channels.forEach(channel => {
            console.log(`- ${channel.name} ${channel.type} ${channel.id}`)
        })
    })
})

function randomDamn() {

    let n = Math.floor(Math.random() * 10)
    
    switch (n) {
        case 0:
            return "אמא שלך זונה יבן זונה"
            break
        case 1:
            return "יבן שרמוטה אני אזיין אותך"
            break
        case 2:
            return "שתוק יהומו מזדיין אוכל בתחת"
            break
        case 3:
            return "לך תזדיין יבן זונה"
            break
        case 4:
            return "אני מזיין את אמא שלך ואבא שלך זה הצלם יזין"
            break
        case 5:
            return "לאמא הזונה שלך יש כוס בטעם תות"
            break
        case 6:
            return "סתום תפה יהומו"
            break
        case 7:
            return "שתוק יהומו אוכל בתחת"
            break
        case 8:
            return "הדילדו מחכה לך בשירותים יהומו"
            break
        case 9:
            return "לך תמצוץ לכושים יבן זונה"
    }
}

client.on('message', recivedMessage => {

    if (recivedMessage.author == client.user) {
        return
    }

    if (/זונה|זין|זיין|הומו|שרמוטה|גיי/.test(recivedMessage.content)) {
        recivedMessage.channel.send(recivedMessage.author + " " + randomDamn())
    }

    if (recivedMessage.content == 'מה לשים בתה?') {
        return;
    }

})

client.login(process.env.TOKEN)