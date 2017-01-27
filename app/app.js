'use strict';

angular.module('myApp', [])
.controller('mainController', function($scope, $http) {
	$scope.sortType     = 'id'; 
	$scope.searchFilter     = 'id'; 
	$scope.searchPokemon   = '';
	$scope.sortReverse  = false;
	$scope.showMe = false;
	$scope.showDet = false;
	$scope.pokedex = '';
	$scope.skills = '';
	$scope.types = '';


	$http.get('data/pokedex.json').success(function(data1){
        $scope.pokedex = data1; 
        $http.get('data/skills.json').success(function(data2){
            $scope.skills = data2;
        });
        $http.get('data/types.json').success(function(data3){
            $scope.types = data3;
        });
    });
	

	
	$scope.getEtypes =  function(data) {
		$scope.eTypes = [];
		if (data == undefined) { data = []; }
		for (var i = 0; i < $scope.types.length; i++) {
			for (var j=0; j < data.length; j++){
				if ($scope.types[i].cname === data[j]) {
					$scope.eTypes[j] = $scope.types[i].ename;
				}
			}
		}
	};
	
	
	$scope.getEskills =  function(data) {
		$scope.eSkills = [];
		if (data == undefined) { data = []; }
		for (var i = 0; i < $scope.skills.length; i++) {
			for (var j=0; j < data.length; j++){
				if ($scope.skills[i].id === data[j]) {
					$scope.eSkills[j] = $scope.skills[i].ename;
				}
			}
		}
	};
	


	$scope.getSkillDetails =  function(data) {
		$scope.skillDetails = [];
		if (data == undefined) { data = []; }
		for (var i = 0; i < $scope.skills.length; i++) {
			if ($scope.skills[i].ename === data) {
					$scope.skillDetails[0] = $scope.skills[i].ename;
					$scope.skillDetails[1] = $scope.skills[i].id;
					$scope.skillDetails[2] = $scope.skills[i].type;
					$scope.skillDetails[3] = $scope.skills[i].accuracy;
					$scope.skillDetails[4] = $scope.skills[i].pp;
					$scope.skillDetails[5] = $scope.skills[i].power;
			}
		}
	};


	$scope.getSkillTypes =  function(data) {
		if (data == undefined) { data = ''; }
		for (var i = 0; i < $scope.types.length; i++) {
			if ($scope.types[i].cname === data) {
				return $scope.types[i].ename;
			}
		}
	};



	$scope.hoverIn = function(){
		$scope.showDet = true;
	};
	
	$scope.hoverOut = function(){
		$scope.showDet = false;
	};
	

});




