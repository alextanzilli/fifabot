var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexliga = /^\/liga/;  botRegexGoat = /^\/goat/; botRegexGolf = /^\/golfthingorwhatevr/; botRegexTony = /^\/tony/; botRegexTw = /^\/twitch/i;
      botRegexToby = /^\/toby/; botRegexDuck = /^\/duck/;
      botRegexSiege = /^\/siege/; 
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegexliga.test(request.text)) {
    this.res.writeHead(200);
    postMessage("No thanks");
    this.res.end();
  } 
  if(request.text && botRegexGolf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1WHEhoNLbMZbe80Bw7erveDx7NDxxHpE4suxqJ5HTTiw/edit#gid=0");
    this.res.end();
  }   
    if(request.text && botRegexGoat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://ussoccerplayers.com/images/2013/02/alexi-lalas-us-soccer.jpg");
    this.res.end();
  } 
    if(request.text && botRegexTony.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Chill your tits.");
    this.res.end();
  } 
  
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexToby.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Get fucked, nerd.");
    this.res.end();
  } 
    else if(request.text && botRegexDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.quackergiftshop.com/eCart/catalog/(522)soccer%20ball%20duck.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
