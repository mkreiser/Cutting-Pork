'use strict';

angular.module('cuttingPorkApp')

.controller('homeCtrl', function(CANDIDATES, $scope) {
	var currentElectionList = ['Bernie Sanders', 'Donald Trump', 'Hilary Clinton', 'Ted Cruz'];
	var trendingCandidatesList = ['Bernie Sanders', 'Donald Trump', 'Hilary Clinton'];

	$scope.trendingIssues = ['Immigration', 'Supreme Court', 'Abortion', 'Campaign Finance', 'Financial Reform', 'Education'];

	$scope.currentElection = [];
	$scope.trendingCandidates = [];

	angular.forEach(currentElectionList, function(candidateName) {
		$scope.currentElection.push(CANDIDATES[candidateName]);
	});

	angular.forEach(trendingCandidatesList, function(candidateName) {
		$scope.trendingCandidates.push(CANDIDATES[candidateName]);
	});

	$scope.currShowRunning = initCurrShow($scope.currentElection); 		//Indices in currentElectionList to be shown //Max 3
	$scope.currShowTrending = initCurrShow($scope.trendingCandidates);	//Indices in trendingCandidatesList to be show  //Max 3

	$scope.incrementShowRunning = function (amount){
		$scope.currShowRunning = incrementShowing($scope.currShowRunning, $scope.currentElection, amount);
		console.log($scope.currShowRunning);
	}

	$scope.incrementShowTrending = function (amount){
		$scope.currShowTrending = incrementShowing($scope.currShowTrending, $scope.trendingCandidates, amount);
	}

	var incrementShowing = function (currShowing, origCandidates, amount){
		var maxIndex 	= origCandidates.length - 1; 
		var newCurrShowing 	= currShowing;

		currShowing.forEach(function (currShow, currIndex){
			var newCurrShow		= currShow + amount;
			if (newCurrShow > maxIndex)
				newCurrShow		= newCurrShow - maxIndex - 1; //- 1 because of boost
			else if (newCurrShow < 0) 
				newCurrShow 	= maxIndex - newCurrShow - 1
			newCurrShowing[ currIndex ] = newCurrShow
		})

		return newCurrShowing;
	}

	function initCurrShow(origCandidates){
		if(origCandidates.length >= 3)
			return [0, 1, 2]
		if(origCandidates.length < 3)
			return ([0, 1, 2]).splice(0, origCandidates.length);
	}
});
