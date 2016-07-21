climbLog.controller('mainCtrl', ['$scope', '$location', function($scope, $location){
    $scope.message = "mainCtrl works";
    
    $scope.go = function ( path ) {
  $location.path( path );
};
}]);