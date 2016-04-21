'use strict';

angular.module('cuttingPorkApp')

.controller('candidateCtrl', function(CANDIDATES, $location, $scope) {
	if ($location.hash() === false) {
		$location.path('/');
	}

	$scope.candidate = CANDIDATES[$location.hash()];
});
