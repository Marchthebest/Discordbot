




const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");
const fs = require('fs');
const ytdl = require('ytdl-core');
const moment = require('moment');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const dateFormat = require('dateformat');
const Eris = require("eris");
const canvas = require('canvas')
const jimp = require('jimp')
const h = require('h')




client.on('message', message => {
    
   if (message.content.startsWith(".id")) {

if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');















        let defineduser = '';
        if (!args[1]) { // If they didn't define anyone, set it to their own.
            defineduser = message.author;
        } else { // Run this if they did define someone...
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned;
        }













const w = ['./pf.png'];
var Canvas = require('canvas')
var jimp = require('jimp')

         const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
          dateFormat(now, 'dddd, mmmm dS, yyyy');
              let time = `${dateFormat(defineduser.createdAt)}`



        let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300);

})
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
          
      }


                let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 114, 10, 70, 70);
                                              var time2;
      if(mentionned){
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
          
      }  
                           var status;
    if (defineduser.presence.status === 'online') {
        status = 'اون لاين';
    } else if (defineduser.presence.status === 'dnd') {
        status = 'مشغول';
    } else if (defineduser.presence.status === 'idle') {
        status = 'خمول';
    } else if (defineduser.presence.status === 'offline') {
        status = 'اوف لاين';
    }
    
                        ctx.font = '20px Arial Bold';
                        ctx.fontSize = '29px';
                        ctx.fillStyle = "#00ff00";
                        ctx.textAlign = "center";
                        ctx.fillText(status, 150, 272);
                        
    
                        
                        ctx.font = '13px Arial Bold';
                        ctx.fontSize = '10px';
                        ctx.fillStyle = "#00fff0";
                        ctx.textAlign = "center";
                        ctx.fillText(`${defineduser.username}`, 55, 181);

                        var time2;
      if(mentionned){
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
          
      }
           
                                                //wl
                        ctx.font = '10px Arial Bold';
                        ctx.fontSize = '5px';
                        ctx.fillStyle = "#00fff0";
                        ctx.textAlign = "center";
                        ctx.fillText(time2, 224, 180);
                        
message.channel.sendFile(canvas.toBuffer())

            // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
            // seconds after this.
        })
    })




}

})



client.login(process.env.BOT_TOKEN);
