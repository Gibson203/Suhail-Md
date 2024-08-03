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


global.devs = "260772474874" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260772474874";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "260772474874";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_27_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NixcbiAgICAgICAgMTQwLFxuICAgICAgICA1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgNixcbiAgICAgICAgMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMTE3LFxuICAgICAgICA1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjIsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyLFxuICAgICAgICAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJJSDBrK0pVQXhBSFgyb3VHTGtKNFc0V3k4OS9KVkdTMERtNFQ3UUlWd3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYwNzcyNDc0ODc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQzRGNDgwRUMyQkI2MjYyQzRFRTY4QzZGNEU5NjYyMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3MDI0MjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjA3NzI0NzQ4NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM2ODdFMTNCOUY1MzgyNzExQUM3M0I5RDhERTg2QTdGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjcwMjQzMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3Z292TTREYlFGV0JUVUZzRXpXV1RnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzYTI5M2U4LWFlOTEtNDUxNy1hMDI2LWIyMDkyMWQ2NjE2OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAxMTcsXG4gICAgICAxOTcsXG4gICAgICA4MixcbiAgICAgIDIzNixcbiAgICAgIDIxMixcbiAgICAgIDI0LFxuICAgICAgNjEsXG4gICAgICAyMDQsXG4gICAgICAzMSxcbiAgICAgIDE4OSxcbiAgICAgIDIwMCxcbiAgICAgIDIxNixcbiAgICAgIDI0OCxcbiAgICAgIDcsXG4gICAgICA5OSxcbiAgICAgIDIsXG4gICAgICAxNTYsXG4gICAgICAyMzksXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICA5OCxcbiAgICAgIDIwNSxcbiAgICAgIDIxLFxuICAgICAgMTI3LFxuICAgICAgMTcyLFxuICAgICAgMTYyLFxuICAgICAgNDgsXG4gICAgICAxOTksXG4gICAgICAxMDMsXG4gICAgICAxNDEsXG4gICAgICAxNCxcbiAgICAgIDU2LFxuICAgICAgMjI5LFxuICAgICAgODUsXG4gICAgICAxNzYsXG4gICAgICAxODYsXG4gICAgICAzMSxcbiAgICAgIDI0MixcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5OTRCNVc2NFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwNzcyNDc0ODc0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MTEyODc4NjQxOTc5NDozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkdpYnNvbiBKclwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hQzFrQVExN1M1dFFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVHlMaEpodjdUMTFnQjBjb2ZyMjlHSVRnMWwyWE8xblQyaGlwVXh4MFhEaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJRUxQSXpWWEFhQ3VYTU1oQlgvLy8xU1BpU3hVVkN2RnROUXpYUG9EU284Um9ZY2F2OFBBbXplTDJJeFlpdXVoV2ExdnFqUDN2UEFRcDdLQUtRbEpEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYWEZjVDZ5aTUyUWQwdWo1MkxvQkxVMTE0M25VRFR6VnlIV1B6QmkwMlNJVW5SZ2cyR2ZPWmxBcHJ5S2tGQXhZbmY1VzdnZ3ZNVWNkMmZsU1VtTlppdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA3NzI0NzQ4NzQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3MDI0MjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMV3ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxXdi5qc29uIjogIntcImtleURhdGFcIjpcImFlTm9sN2ZNR0ZOU2I5K3M5b1JSN2JuQVpUZXN6b3Zwam9BUnl6SjdVNHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1NjI3MTEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3MDAyNjk4MjVcIn0iCn0="  // PUT your SESSION_ID 


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
