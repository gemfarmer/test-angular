/*
 * Serve JSON to our AngularJS client
 */

exports.names = function (req, res) {
	res.json({
	  	names: [
			{name:'Brian', city:'Minneapolis'}, 
			{name:'Chase', city:'Madison'}, 
			{name:'Collin', city:'Boulder'}, 
			{name: 'Brian', city: 'Boulder'}
		]
	});
};