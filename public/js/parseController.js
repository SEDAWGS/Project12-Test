Parse.initialize('MQtuM0CbGBUctFLc1L73H1htKmqmKH0CznBbbwDk', 
		'T70GKfXJnwmtzDECFwXZGBtM67LpnVGvv4U8g4f5');
var Sublet = Parse.Object.extend('Sublet');

var app = angular.module('parseApp', ['ui.bootstrap']);

app.controller('parseCtrl', ['$scope', '$modal', function($scope, $modal) {
	//Angular model
	$scope.sublets = [];

	//Parse Initial Query -- read data from Parse App
	var query = new Parse.Query(Sublet);
	query.find({
		success: function(results) {
			if (results.length > 0) {
				$scope.sublets = JSON.parse(JSON.stringify(results));
				$scope.$apply(); //update the $scope -- Parse seems to mess with it.
			}
		},
		error: function(error) {
			alert('Error: ' + error.code + ': ' + error.message);
		}
	});

	//Create a modal, assign template and controller
	$scope.newSublet = function() {
		var modalInstance = $modal.open({
			templateUrl: 'new-sublet.html',
			controller: 'newSubletCtrl'
		});

		modalInstance.result.then(function(sublet) { //action on succesful save
			$scope.sublets.push(sublet); //Do not query again, just append
		});
	};

	$scope.delete = function(sublet) {
		query.get(sublet.objectId, { //delete on Parse by unique ObjectId
			success: function(sub) {
				sub.destroy ({
					success: function(s) { //delete on UI
						$scope.sublets.splice($scope.sublets.indexOf(sublet), 1);
						$scope.$apply();
					},
					error: function(s, error) {
						alert('Error: ' + error.code + ': ' + error.message);
					}
				});
			},
			error: function(object, error) {
				alert('Error: ' + error.code + ': ' + error.message);
			}
		});
	};
}]);

app.controller('newSubletCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {
	//Angular model
	$scope.sublet = {};

	$scope.save = function() {
		var imageUpload = $('#imageUpload')[0];
		var parseFile = null;
		if (imageUpload.files.length > 0) {
			var img = imageUpload.files[0];
			var name = 'photo.jpg'; //ONLY WORKS WITH JPEGS FOR NOW
			parseFile = new Parse.File(name, img);
			parseFile.save().then(function() { }, 
			function(error) {
				alert('Image could not be uploaded. Error: ' + error.code + ': ' + error.message);
			});
		}
		//save Angular model as Parse Object
		var sublet = new Sublet();
		sublet.set('Address', $scope.sublet.Address);	
		sublet.set('Price', $scope.sublet.Price);
		sublet.set('Details', $scope.sublet.Details);
		sublet.set('Image', parseFile);
		$scope.sublet.Image = parseFile; //update Image
		sublet.save(null, {
			success: function(sublet) {
				$modalInstance.close($scope.sublet); //close on succesful save
			},
			error: function(sublet, error) {
				alert('Failed to create new object, with error: ' + error.message);
		  }
		});
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
}]);