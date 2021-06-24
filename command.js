var dns = require('dns');
var Ping = require('ping-wrapper');
const Eris = require("C:/Discord Bot/node_modules/eris");
const axios = require('axios')
var randomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};






const bot = new Eris.CommandClient("TOKEN_GOES_HERE, {}, {
    description: "command terminal for <PUT_NAME_HERE>",
    owner: "somebody",
    prefix: "."
});





bot.on("ready", () => { // When the bot is ready
    console.log("{+} Console Ready"); 
});






bot.registerCommandAlias("halp", "help", "HELP", "HALP");


bot.registerCommand("pong", ["Pang!", "Peng!", "Ping!", "Pung!"], { // Make a pong command
    description: "Ping!",
    fullDescription: "Ping The Bot!"
});








commandLine = function(command, callback) {
  var exec = require('child_process').exec;
  var child_process = exec(command, function (err, stdout, stderr) {

    if (err && err.length > 1) {
            console.log("failed to find playback or record devices");
            callback(error("InternalError", "No input or output devices found", 500));
            return;
        }else{
            if(stdout){
                    callback(null,stdout); //returns cmd line output 
            }
            if(stderr){
                callback(new Error("STDERR"),stderr);
            }

    }  
  });
  return child_process;
};







const echoCommand = bot.registerCommand("whois", (msg, args) => { // Make an echo command
    if(args.length === 0) { // If the user just typed ".whois", say "Invalid input"
        return "Invalid input";
    }
    const text = args.join(" "); // Make a string of the text after the command label
    const dns = require('dns')
    try{	
  dns.lookup(text, function(err, result) {
  console.log("{+} IP RESOLVED " + result)
  bot.createMessage(msg.channel.id, "{+} " + result);	  
})
}
catch{bot.createMessage(msg.channel.id, "{+} Cannot whois...");}	
    return result; // Return the generated string
}, {
    description: "IP Resolver",
    fullDescription: "O_O",
    usage: " <text>"
});
	
	
	
	
	


const FindImageCommand = bot.registerCommand("findimage", (msg, args) => { // Make an echo command
    if(args.length === 0) { // If the user just typed ".whois", say "Invalid input"
        return "Invalid input";
    }
    const text = args.join(" "); // Make a string of the text after the command label
    var rand = randomNumber(480, 900);	
    var rando = randomNumber(480, 900);
    try{	
    bot.createMessage(msg.channel.id, "https://loremflickr.com/" + rand + "/" + rando + "/" + text);
    	}
    	catch
   { 
   bot.createMessage(msg.channel.id, "Something Went Wrong, Try Again...");	  
    return result; // Return the generated string
   }
}, {
    description: "Image Finder",
    fullDescription: "No Spaces Please",
    usage: " <text>"
});





	

const pinger = bot.registerCommand("pinghost", (msg, args) => { // Make an echo command

    if(args.length === 0) { // If the user just typed ".whois", say "Invalid input"
        return "Invalid input";
    }
const text = args.join(" "); // Make a string of the text after the command label   
var cmd_output = '';

var cp = commandLine('ping ' + text + " -n 4",function(err,data){
    console.log("Callback called");
    if(err){
        console.log(err);
        bot.createMessage(msg.channel.id, "{+} Pinging Failed. ");
    }
    cmd_output = Buffer.from(data).toString('utf8');
})

cp.on('close',function(){
    //cmd_output is already populated above. If you want just console.log here or leave it
    console.log(cmd_output);
    bot.createMessage(msg.channel.id, "{+} Pinging " + text + cmd_output);
})
  
}, {
    description: "Pinger",
    fullDescription: "Ping Things",
    usage: " <text>"
});
	
	
	



	
const portscan80 = bot.registerCommand("portscan_80", (msg, args) => { // Make an echo command
    bot.createMessage(msg.channel.id, "Please Wait, Attempting To Scan.");
    if(args.length === 0) { // If the user just typed ".whois", say "Invalid input"
        return "Invalid input";
    }

const text = args.join(" "); // Make a string of the text after the command label
var cmd_output = '';

var cp = commandLine("portqry -n " + text + " -p both -e 80",function(err,data){
    console.log("Callback called");
    if(err){
        console.log(err);
    }
    cmd_output = Buffer.from(data).toString('utf8');
})

cp.on('close',function(){
    //cmd_output is already populated above. If you want just console.log here or leave it
    console.log(cmd_output);
    bot.createMessage(msg.channel.id, "{+} Output From " + text + cmd_output);
})
  
}, {
    description: "Port Scanner",
    fullDescription: "Scan Port 80",
    usage: " <text>"
});
	
	
	
	
	
	
	
	 
const portscan443 = bot.registerCommand("portscan_443", (msg, args) => { // Make an echo command
    bot.createMessage(msg.channel.id, "Please Wait, Attempting To Scan.");
    if(args.length === 0) { // If the user just typed ".whois", say "Invalid input"
        return "Invalid input";
    }

const text = args.join(" "); // Make a string of the text after the command label
var cmd_output = '';

var cp = commandLine("portqry -n " + text + " -p both -e 443",function(err,data){
    console.log("Callback called");
    if(err){
        console.log(err);
    }
    cmd_output = Buffer.from(data).toString('utf8');
})

cp.on('close',function(){
    //cmd_output is already populated above. If you want just console.log here or leave it
    console.log(cmd_output);
    bot.createMessage(msg.channel.id, "{+} Output From " + text + cmd_output);
})
  
}, {
    description: "Port Scanner",
    fullDescription: "Scan Port 443",
    usage: " <text>"
});
	
	
	
	
	




const portscansteam = bot.registerCommand("portscan_steam", (msg, args) => { // Make an echo command
    bot.createMessage(msg.channel.id, "Please Note When Portscanning Steam The Wait Will Be ***Alot*** Longer, Attempting To Scan.");
    if(args.length === 0) { // If the user just typed ".whois", say "Invalid input"
        return "Invalid input";
    }

const text = args.join(" "); // Make a string of the text after the command label
var cmd_output = '';

var cp = commandLine("portqry -n " + text + " -p both -o 27014,27015,27027,27030",function(err,data){
    console.log("Callback called");
    if(err){
        console.log(err);
    }
    cmd_output = Buffer.from(data).toString('utf8');
})
cp.on('close',function(){
    //cmd_output is already populated above. If you want just console.log here or leave it
    console.log(cmd_output);
    bot.createMessage(msg.channel.id, "{+}"+ text + cmd_output);
})
  
}, {
    description: "Port Scanner For Steam Clients",
    fullDescription: "Scan Steam Ports",
    usage: " <text>"
});
	
	
	
	
	
	


const portscanopendir = bot.registerCommand("portscan_ftp", (msg, args) => { // Make an echo command
    bot.createMessage(msg.channel.id, "Scanning ftp Channels");
    if(args.length === 0) { // If the user just typed ".whois", say "Invalid input"
        return "Invalid input";
    }

const text = args.join(" "); // Make a string of the text after the command label
var cmd_output = '';

var cp = commandLine("portqry -n " + text + " -p both -o 21,22,6667",function(err,data){
    console.log("Callback called");
    if(err){
        console.log(err);
    }
    cmd_output = Buffer.from(data).toString('utf8');
})

cp.on('close',function(){
    //cmd_output is already populated above. If you want just console.log here or leave it
    console.log(cmd_output);
    bot.createMessage(msg.channel.id, "{+}"+ text + cmd_output);
})
  
}, {
    description: "Port Scanner For ftp/opendir",
    fullDescription: "Scan Common File Directories",
    usage: " <text>"
});
	
	
	
	
	


const portscan_sql = bot.registerCommand("portscan_sql", (msg, args) => { // Make an echo command
    bot.createMessage(msg.channel.id, "Please Wait, Attempting To Scan.");
    if(args.length === 0) { // If the user just typed ".whois", say "Invalid input"
        return "Invalid input";
    }

const text = args.join(" "); // Make a string of the text after the command label
var cmd_output = '';

var cp = commandLine("portqry -n " + text + " -p both -o 1433,4022,135,1434",function(err,data){
    console.log("Callback called");
    if(err){
        console.log(err);
    }
    cmd_output = Buffer.from(data).toString('utf8');
})

cp.on('close',function(){
    //cmd_output is already populated above. If you want just console.log here or leave it
    console.log(cmd_output);
    bot.createMessage(msg.channel.id, "{+} Output From " + text + cmd_output);
})
  
}, {
    description: "Port Scanner",
    fullDescription: "Scan For Common SQL Ports.",
    usage: " <text>"
});
	
	
	
	
	

const encodebase64 = bot.registerCommand("encodebase64", (msg, args) => { // Make an echo command
    bot.createMessage(msg.channel.id, "Attempting To Encode.");
    if(args.length === 0) { // If the user just typed "encodebase64", say "Invalid input"
        return "Invalid input";
    }
try{
    const text = args.join(" "); // Make a string of the text after the command label   
    let data = text;
    let buff = new Buffer(data);
    let base64data = buff.toString('base64');
    bot.createMessage(msg.channel.id, "{+} " + data + " => " + base64data);
}
catch{bot.createMessage(msg.channel.id, "{+} Well This Was Unforseen....Cant Convert!!");}
}, {
    description: "Convert To Base 64",
    fullDescription: "Base64 Convert",
    usage: " <text>"
});





const decodebase64 = bot.registerCommand("decodebase64", (msg, args) => { // Make an echo command
    bot.createMessage(msg.channel.id, "Attempting To Decode.");
    if(args.length === 0) { // If the user just typed "encodebase64", say "Invalid input"
        return "Invalid input";
    }
try{
    const text = args.join(" "); // Make a string of the text after the command label   
    let data = text;
    let buff = new Buffer(data, 'base64');
    let askers = buff.toString('ascii');
    bot.createMessage(msg.channel.id, "{+} " + data + " >> " + askers);
}
catch{bot.createMessage(msg.channel.id, "{+} Well This Was Unforseen....Cant Convert!!");}
}, {
    description: "Decode Base 64",
    fullDescription: "Base64 Decode",
    usage: " <text>"
});







 
   
const resolvehost = bot.registerCommand("resolve", (msg, args) => { // Make an echo command

    if(args.length === 0) { // If the user just typed ".whois", say "Invalid input"
        return "Invalid input";
    }
const text = args.join(" "); // Make a string of the text after the command label   
function reverseLookup(ip) {
	
	dns.reverse(text,function(err,domains){
		if(err!=null)	console.log(err);
	

		domains.forEach(function(domain){
			dns.lookup(domain,function(err, address, family){
				console.log("{+}" + domain,'[',address,']');
				console.log('{+} reverse:',ip==address);
				bot.createMessage(msg.channel.id, "{+} " + domain);
				
				
			});
		});
	});
}

reverseLookup(text);
}, {
    description: "IP To Hostname",
    fullDescription: "Hostname Resolver",
    usage: " <text>"
});
	
	


bot.connect();
