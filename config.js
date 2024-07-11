const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_29_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MixcbiAgICAgICAgODMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0FsczdQa3p4clMwUG5ZVExjdzNtWTNtYWx1UEg4T2J6b2tNM1pGZ1hmTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwianZyb0JOTTRUcXlONVhWcVMxVkRvd1wiLFxuICBcInBob25lSWRcIjogXCI3YTg1NDI1My02NDAwLTQxZWItOTliMS0zNmFiYzYwZjk0Y2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMTQ1LFxuICAgICAgMTM3LFxuICAgICAgMTU0LFxuICAgICAgNjMsXG4gICAgICAyMjEsXG4gICAgICA3OCxcbiAgICAgIDEzOSxcbiAgICAgIDEzNCxcbiAgICAgIDg3LFxuICAgICAgMjUxLFxuICAgICAgMTUsXG4gICAgICAxNjAsXG4gICAgICAxNTIsXG4gICAgICAxNDIsXG4gICAgICAxNDUsXG4gICAgICA3NCxcbiAgICAgIDE4MyxcbiAgICAgIDYxLFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgMjEwLFxuICAgICAgNTcsXG4gICAgICA0MyxcbiAgICAgIDIwOSxcbiAgICAgIDY1LFxuICAgICAgNjgsXG4gICAgICA4NCxcbiAgICAgIDYxLFxuICAgICAgMTk5LFxuICAgICAgMTgzLFxuICAgICAgMTkzLFxuICAgICAgMTcxLFxuICAgICAgMjQwLFxuICAgICAgNDUsXG4gICAgICAyMTcsXG4gICAgICAxMTgsXG4gICAgICAxMjcsXG4gICAgICA1MSxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSR1RKUldZRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzY3MzQwMzA6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZqF8J2ZuPCdmbzwnZmwIPCdmbzwnZm+8J2Zs/CdmoIo8J2ao/Cdmbwg8J2ag/CdmbTwnZmw8J2ZvCkg8J2ajPCdmpjwnZqX8J2anPCdmp0g8J2anPCdmp3wnZqb8J2akvCdmpfwnZqQ8J2anCBcXFwi8J2ah/CdmofwnZqHXFxcIl5cIixcbiAgICBcImxpZFwiOiBcIjQzNjI0Mjg0ODI3ODA5OjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mT3VQNENFS3psd0xRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ1llWFQvbHlxN294aHRpYlFzcTNYbDFFM25PQkFkNHBrUmptV0xxNjVYTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrWkF5V3Fabit6eXBDWDczVlRtUVhuaGFMTmJHU0lMekthS0VuOVBsS1h2YldVa1RCNldjT3hSbjFJQWdsMEhOclhTL1Z1bno3dTl2ZmF0aW50cmpEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuLzY4REtxVTZ5U1hHbmNub2RhNFV6VllyWXM1T0RRemRnWUt1TXRiYnhIdVZOTlZ2bmUxYnNha0Q4M3FFSmRad05CcU5EV3ZvNTBvWVNTU05XKzNEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NjczNDAzMDoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MjYxOTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
