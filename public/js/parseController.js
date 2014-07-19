var app = angular.module('parseApp', []);

app.controller('parseController', ['$scope', function($scope) {
	Parse.initialize('MQtuM0CbGBUctFLc1L73H1htKmqmKH0CznBbbwDk', 
		'T70GKfXJnwmtzDECFwXZGBtM67LpnVGvv4U8g4f5');
	var queryName = 'Sameer';
	var Game = Parse.Object.extend("Game");
	var query = new Parse.Query(Game);
	query.equalTo('name', queryName);
	query.find({
		success: function(results) {
			if (results.length > 0) {
				alert('Object found!');
			}
			else {
				var gameObject = new Game();
				gameObject.save({name: queryName}).then(function(object) {
					alert('Object not found. Created new object.');
				});
			}
		},
		error: function(error) {
			alert('Error: ' + error.code + ' ' + error.message);
		}
	});
}]);