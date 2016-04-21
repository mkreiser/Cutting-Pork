'use strict';

angular.module('cuttingPorkApp')

.controller('issueCtrl', function(ISSUES, $location, $scope) {
	if ($location.hash() === false) {
		$location.path('/');
	}

	$scope.issue = ISSUES[$location.hash()];
});
