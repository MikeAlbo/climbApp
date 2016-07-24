climbLog.controller('authCtrl', ["$scope", "Auth", "$location", function($scope, Auth, $location){
    
     // on Auth state change
    var newUser;
    
    Auth.$onAuthStateChanged(function(user){
       if (user && newUser && $scope.error != null){
          $location.path("/settings");
           console.log("user settings path " + user.uid);
       } else if (user && $scope.error != null) {
           $location.path('/home');
           console.log("user home path " + user.uid);
       } else {
           console.log("no user");
       }
    });
    
            $scope.error = {
                code: "",
                message: ""
            };
    
    // create a new user
    
        $scope.createUser = function(){
            $scope.error.code = null;
            $scope.error.message = null;
            
            Auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password).catch(function(error){
                    $scope.error.code = error.code;
                    $scope.error.message = error.message;
                    console.log($scope.error.message);
                    return $scope.error;
                });
            
            
            newUser = true;
        };
    
    
    // log in a user
        $scope.login = function(){
            $scope.error.code = null;
            $scope.error.message = null;
            
            Auth.$signInWithEmailAndPassword($scope.user.email, $scope.user.password).catch(function(error){
                    $scope.error.code = error.code;
                    $scope.error.message = error.message;
                    console.log($scope.error.message);
                    return $scope.error;
                
            }).then(function(){
                newUser = false;
            });
        };
    
            
    // logout a user
    $scope.logOut = function(){
        Auth.$signOut();
    };
    
    
            
    // log in Anonymously 
            
        $scope.loginAnonymously = function(){
            $scope.error.code = null;
            $scope.error.message = null;
            
            Auth.$signInAnonymously().catch(function(error){
                    $scope.error.code = error.code;
                    $scope.error.message = error.message;
                    console.log($scope.error.message);
                    return $scope.error;
            });
        };
    
     // redirects page!! change to custome directive to use across controllers
    $scope.go = function ( path ) {
        $location.path( path );
    };
    
}] );