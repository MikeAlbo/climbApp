climbLog.controller('authCtrl', ["$scope", "Auth", "$location", function($scope, Auth, $location){
    
     // on Auth state change
    
//    Auth.$onAuthStateChanged(function(user){
//       if (user){
//           $scope.user = user;
//           console.log("user" + user.uid);
//       } else {
//           console.log("no user");
//       }
//    });
    
    // create a new user
    
        $scope.createUser = function(){
            $scope.error = null;
            $scope.message = null;
            
            Auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password).catch(function(error){
                $scope.error = error.code;
                $scope.message = error.message;
            }).then(function(){
                setTimeout($location.path('/settings'), 5);
            });
            
            
        };
    
    // log in a user
        $scope.login = function(){
            $scope.error= null;
            $scope.message = null;
            
            Auth.$signInWithEmailAndPassword($scope.user.email, $scope.user.password).catch(function(error){
                $scope.error = error.code;
                $scope.message = error.message;
                
            });
        };
    
            
    // logout a user
    $scope.logOut = function(){
        Auth.$signOut();
    };
    
    
            
    // log in Anonymously 
            
        $scope.loginAnonymously = function(){
            $scope.error = null;
            $scope.message = null;
            
            Auth.$signInAnonymously().catch(function(error){
                $scope.error = error.code;
                $scope.message = error.message;
            });
        };
    
     // redirects page!! change to custome directive to use across controllers
    $scope.go = function ( path ) {
        $location.path( path );
    };
    
}] );