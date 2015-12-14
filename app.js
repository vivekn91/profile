
var profileApp = angular.module('profileApp', []);

profileApp.controller('loadProfile',['$scope','$http', function($scope,$http) {
	console.log("Angular loaded");
	$http.get('data.json').success(function(data) {
		$scope.profileData = data;
	});
}]);
