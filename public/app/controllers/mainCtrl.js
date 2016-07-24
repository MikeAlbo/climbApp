climbLog.controller('mainCtrl', ['$scope', '$location', "Auth",  function($scope, $location, Auth ){
    
    // retreive current user
//    $scope.user = Auth.$getAuth();
//    if($scope.user){
//        console.log($scope.user);
//    } else {
//        console.log("no user");
//    }
//    
   
     $scope.currentUser = Auth.$getAuth();
     
        
    // --- log routes --- //
    // select scale var, changes active state of button
    $scope.scaleSelect = "top-rope";
    $scope.selectEnv = "gym";
    
    // session model
    $scope.session = {
        name: "",
        sessionDate: Date.now(),
        scale: $scope.scaleSelect,
        environment: $scope.selectEnv,
        style: ["top-rope", "sport", "trad", "alpine", "boulder"],
        location: ""
    };
    
    // redirects page!! change to custome directive to use across controllers
    $scope.go = function ( path ) {
  $location.path( path );
};
    
    
    // logout
    
    $scope.logOut = function(){
        Auth.$signOut();
        $location.path("/welcome");
    };
}]);