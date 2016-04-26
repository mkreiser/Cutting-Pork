'use strict';

angular.module('cuttingPorkApp')

.controller('homeCtrl', function(CANDIDATES, ISSUES, $scope) {
	var currentElectionList = ['Bernie Sanders', 'Donald Trump', 'Hillary Clinton', 'Ted Cruz'];
	var trendingCandidatesList = ['Bernie Sanders', 'Donald Trump'];

	$scope.trendingIssues = ['Immigration', 'Supreme Court', 'Abortion', 'Campaign Finance', 'Financial Reform', 'Education'];
	$scope.fullCandidates = CANDIDATES
	$scope.currentElection = [];
	$scope.trendingCandidates = [];

	angular.forEach(currentElectionList, function(candidateName) {
		$scope.currentElection.push(CANDIDATES[candidateName]);
	});

	angular.forEach(trendingCandidatesList, function(candidateName) {
		$scope.trendingCandidates.push(CANDIDATES[candidateName]);
	});

	function initCurrShow(origCandidates){
		if(origCandidates.length >= 3){
			return [0, 1, 2];
		}
		if(origCandidates.length < 3){
			return ([0, 1, 2]).splice(0, origCandidates.length);
		}
	}

	$scope.currShowRunning = initCurrShow($scope.currentElection); 		//Indices in currentElectionList to be shown //Max 3
	$scope.currShowTrending = initCurrShow($scope.trendingCandidates);	//Indices in trendingCandidatesList to be show  //Max 3

	$scope.incrementShowRunning = function (amount){
		$scope.currShowRunning = incrementShowing($scope.currShowRunning, $scope.currentElection, amount);
		console.log($scope.currShowRunning);
	}; 

	$scope.incrementShowTrending = function (amount){
		$scope.currShowTrending = incrementShowing($scope.currShowTrending, $scope.trendingCandidates, amount);
	};

	var incrementShowing = function (currShowing, origCandidates, amount){
		var maxIndex 	= origCandidates.length - 1; 
		var newCurrShowing 	= currShowing;

		currShowing.forEach(function (currShow, currIndex){
			var newCurrShow		= currShow + amount;
			if (newCurrShow > maxIndex){
				newCurrShow		= newCurrShow - maxIndex - 1; //- 1 because of boost
			}
			else if (newCurrShow < 0) {
				newCurrShow 	= maxIndex - newCurrShow - 1;
			}
			newCurrShowing[ currIndex ] = newCurrShow;
		});

		return newCurrShowing;
	};

	/**
	 * Main function for implementing search. Only a basic indexOf search
	 * @return {[type]} [description]
	 */
	$scope.searchFor = function (){
		var dest 			= document.getElementsByClassName("search-bar")[0];
		var prevResults 	= dest.getElementsByClassName("searchResult");
		while (prevResults.length){
			dest.removeChild(prevResults[0]);		/**Clear out previous results**/
		}
		if (!$scope.searchQuery)
			return;

		var candidates 		= Object.keys(CANDIDATES)
		var issues 			= Object.keys(ISSUES);
		var candidMatches 	= findMatches($scope.searchQuery, candidates); 
		var issueMatches 	= findMatches($scope.searchQuery, issues);
		var totalResults 	= {"candidate":candidMatches, "issue":issueMatches}

		showSearchResults(dest, totalResults);
	}

	/**
	 * Goes through the pool to see if anything contains que
	 * @param  {[String]} que  [Searching for this]
	 * @param  {[Array]} pool [Within these]
	 * @return {[type]}      [description]
	 */
	function findMatches (que, pool){
		var matches = []; 
		for (var i = 0; i < pool.length; i++){
			var curr = pool[i]; 
			if (curr.toLowerCase().indexOf (que.toLowerCase()) !== -1)
				matches.push(curr)
		}
		return matches;
	}

	/**
	 * Creates the appropriate links as part of the search results and displays them
	 * @param  {[type]} dest    [description]
	 * @param  {[type]} results [description]
	 * @return {[type]}         [description]
	 */
	function showSearchResults (dest, results){
		for (var category in results){
			for(var i = 0; i < results[category].length; i++){
				var match 			= results[category][i]
				var resultDiv 		= document.createElement("div");
				var resultElem 		= document.createElement("a");
				resultDiv.appendChild(resultElem);
				resultDiv.className = "searchResult"
				resultElem.href		= "#/" + category +"#" + match
				resultElem.innerHTML = "<small>" + category +  "</small> <b>"+ match +"</b>"

				dest.appendChild(resultDiv);
			}
		}
	}
});
