'use strict';

angular.module('cuttingPorkApp')

.controller('homeCtrl', function(CANDIDATES, $scope) {
	var currentElectionList = ['Bernie Sanders', 'Donald Trump'];
	var trendingCandidatesList = ['Bernie Sanders', 'Donald Trump'];

	$scope.trendingIssues = ['Immigration', 'Supreme Court', 'Abortion', 'Campaign Finance', 'Financial Reform', 'Education'];

	$scope.currentElection = [];
	$scope.trendingCandidates = [];

	angular.forEach(currentElectionList, function(candidateName) {
		$scope.currentElection.push(CANDIDATES[candidateName]);
	});

	angular.forEach(trendingCandidatesList, function(candidateName) {
		$scope.trendingCandidates.push(CANDIDATES[candidateName]);
	});
});
