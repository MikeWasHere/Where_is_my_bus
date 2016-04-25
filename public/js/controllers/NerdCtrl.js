(function(){

angular.module('NerdCtrl', []).controller('NerdController', function($scope) {

	// $scope.tagline = 'Nothing beats a pocket protector!';
	console.log("Hello NErd");

	$scope.items = ['item1', 'item2', 'item3'];

	$scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});
})();