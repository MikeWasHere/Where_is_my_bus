(function (){

angular.module('GeekCtrl', []).controller('GeekController', function($scope,$firebaseArray) {

	console.log("Loading the controller correctly");	

	// var URL = "https://whereismybus.firebaseio.com/";
 //    var list = $firebaseArray(new Firebase(URL));
 //    $scope.items = list;
 //    console.log("Firebase Data", $scope.items);

    $scope.firstName = "John",
    $scope.lastName = "Doe"	
    $scope.myVar = false;
    $scope.toggle = function() {
    $scope.myVar = !$scope.myVar;
    };
});
})();