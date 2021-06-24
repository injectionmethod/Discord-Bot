const Eris = require("C:/Discord Bot/node_modules/eris");
var bot = new Eris("");
try {
 bot.on("ready", () => { // When the bot is ready
    console.log("{+} Logging Enabled"); // Log "Ready!"
});

bot.on("guildCreate", (guild) => { // When the client joins a new guild
    console.log(`{+} New guild: ${guild.name}`);
});

bot.on("messageCreate", (msg) => { // When a message is created
    console.log(`{+} New message: ${msg.cleanContent}`);
});

// This event will never fire since the client did
// not specify `guildMessageTyping` intent
bot.on("typingStart", (channel, user) => { // When a user starts typing
    console.log(`{+} ${user.username} is typing in ${channel.name}`);
});
}
catch (e) {
  console.log("{+} entering catch block");
  console.log(e);
  console.log("{+} leaving catch block");
}
finally {
  console.log("{+} Starting Bot Connect..");
}

bot.connect(); // Get the bot to connect to Discord
console.log("{+} Bot Connected.");