climbLog.controller('authCtrl', ["$scope", "Auth", function($scope, Auth){
    
    // on Auth state change
    
    Auth.$onAuthStateChanged(function(user){
       if (user){
           // when the user is signed in
       } else {
           // no user signed in
       }
    });
    
    // create a new user
    
        $scope.createUser = function(){
            $scope.error = null;
            $scope.message = null;
            
            Auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password).catch(function(error){
                $scope.error = error.code;
                $scope.message = error.message;
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
    
}] );