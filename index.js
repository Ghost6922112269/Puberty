const format = require('./format.js'); //thank you fps-utils/teralove...
module.exports = function puberty(dispatch) {
	let cid;
	let name;
	
	dispatch.hook('sLogin', (event) => {
    cid = event.cid;
    name = event.name;
  });
function voice(nicememe) {
	if (isNaN(nicememe)) return;
  	  	dispatch.toClient('S_CHANGE_VOICE_USE_QAC', {
			voice: nicememe
		});
}
 dispatch.hook('C_CHAT',1, function(event) {
 let command = format.stripTags(event.message).split(' ');
if(command[0] === '!voice') {
			if (command.length > 1) {
				voice(parseInt(command[1]));
			}
			return false;			
		}
}); 
}	