// var weather = require('../controllers/weather.js');
var path = require('path');
module.exports = function(app){
	
 	// ROOT
 	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./angularApp/dist/index.html"))
	});
};