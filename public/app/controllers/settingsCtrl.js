// settings ctrl

climbLog.controller('settingsCtrl',  ['$scope','Auth', "databaseServices", "$location", function($scope, Auth, databaseServices, $location){
    
    $scope.usePoints = true;
    $scope.scaleSelect = 'yds';
    $scope.name = '';
    
    Auth.$onAuthStateChanged(function(user){
        $scope.user = user;
    });
    
    
    
    
    $scope.submit = function(){
        databaseServices.createUser(
        $scope.user.uid,
        $scope.user.email,
        $scope.name,
        $scope.scaleSelect,
        $scope.usePoints);
        
        setTimeout($location.path('/home'), 100);
    };
        
        
    
//     redirects page!! change to custome directive to use across controllers
    $scope.go = function ( path ) {
  $location.path( path );
};
}]);