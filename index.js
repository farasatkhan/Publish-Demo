var Twit = require('twit');
require('dotenv').config();

var T = new Twit({
	consumer_key:         process.env.CONSUMER_KEY,
  	consumer_secret:      process.env.CONSUMER_SECRET,
  	access_token:         process.env.ACCESS_TOKEN,
  	access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
});


var totalGenerated = 0;

console.log("Begin Working");

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


// User Stream
var stream = T.stream('user');
stream.on('direct_message', function(event){

	var user_message = event.direct_message.text;
 	var username = event.direct_message.sender.screen_name;
 	var ID = event.direct_message.sender.id_str;

 	var random = Math.floor((Math.random()*100)+1);

 	user_message = user_message.toLowerCase();


 	var txt = '@'+ username + ', Your new favorite number is ' + random + '!';


 		if(user_message == '#numberforme'){
 			//Sent message to user with their new favorite number
 			rand_wait = Math.floor(Math.random()*(14-7+1)+7);
 			wait(1000*rand_wait);

			T.post('direct_messages/new',{user_id: ID, screen_name: username, text: "Your favorite number is " + random + '.',}, function(err, data, response){
				if(!err){
					console.log("Successfully Sent message");

					// Reply to them with their new favorite number
				 	T.post('statuses/update', { status: txt }, function(err, data, response) {
				 		totalGenerated += 1;

				 		// Tweet Total number of favorite number generated
				 		T.post('statuses/update', { status: "We have generated " + totalGenerated + " numbers for our users! #NumberForMe" }, function(err, data, response) {
				 				console.log("Posted Total Generated");
						})		
					})					
				}
			})
			// console.log("Worked");
		}

})

// Looking for new users
setInterval(function(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	}

	since = yyyy+'-'+mm+'-'+ dd;

	T.get('search/tweets', { q: 'favorite since:'+ since, count: 15 }, function(err, data, response) {

			var counted = [];

		for(var i=0; i < data.statuses.length;i++){
			var searched_userID = data.statuses[i].user.id_str;
			var searched_username = data.statuses[i].user.screen_name;

			counted.push([searched_userID,searched_username])
		}

		for(var k=0; k < counted.length; k++){
			// +add random number and some more statements
			txt = "@"+counted[k][1]+ ", Do you have a favorite number? If No let me generate one for you! DM us with #NumberForMe";

			T.post('statuses/update', { status: txt}, function(err, data, response) {
		  		console.log("Sent Request")
			})

			// sleep for n minutes
			wait(1000 * 60 * 3);
		}
	})

},1000*60*60*21)


// Report About the Account
setInterval(function(){
	var today = new Date().toJSON().slice(0,10);
	T.post('direct_messages/new',{user_id: 734308298703396865, screen_name: farasatkahan, text: "Working @PublishDemo "+ today}, function(err, data, response){
		if(!err){
			//console.log(data);
			console.log("Report");
		}else{
			console.log(err);
		}
	})
},1000*60*60*24)

console.log("Worked");