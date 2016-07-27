climbLog.controller('mainCtrl', ['$scope', '$location', "Auth", "Profile",  function($scope, $location, Auth, Profile ){
    
    // retreive current user
//    $scope.user = Auth.$getAuth();
//    if($scope.user){
//        console.log($scope.user);
//    } else {
//        console.log("no user");
//    }
//    
   
     $scope.currentUser = Auth.$getAuth();
     
   Profile($scope.currentUser.uid).$bindTo($scope, "userProfile"); 

    
    
    
    // logout
    
    $scope.logOut = function(){
        Auth.$signOut();
        $location.path("/welcome");
    };
    
    // redirects page!! change to custome directive to use across controllers
    $scope.go = function ( path ) {
  $location.path( path );
};
    
    
}]);