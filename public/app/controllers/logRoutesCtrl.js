// log route ctrl

climbLog.controller('logRoutesCtrl',  ['$scope', 'Auth', "databaseServices", '$location',  function($scope, Auth, databaseServices, $location){
    
    // get user data
    $scope.currentUser = Auth.$getAuth();
    
    // --- log routes --- //
    // select scale var, changes active state of button
    $scope.scaleSelect = "yds";
    $scope.selectEnv = "gym";
    
    // selects view
    $scope.logRoutesForm = "newSession";
    
    // session model
    $scope.session = {
        name: "",
        sessionDate: Date.now(),
        scale: $scope.scaleSelect,
        environment: $scope.selectEnv,
        location: ""
        
    };

    
    $scope.createSession = function(){
        databaseServices.addSession($scope.currentUser.uid, $scope.session);
//        alert("new session function works")
        $scope.logRoutesForm = "addRoutes";
    };
    
    $scope.clearRouteFields = function(){
            $scope.session.route.name = "";
            $scope.session.route.grade = "";
        };
    
    
    $scope.createRoute = function(){
         //console.log($scope.session.route.grade);
        databaseServices.addRoute($scope.currentUser.uid, $scope.session);
        $scope.clearRouteFields();
    };
    
    $scope.endSession = function(){
        $location.path('/home');
        $scope.logRoutesForm = "newSession";
    };
    
    
    
    // added routes test data
        $scope.addedRoutes = {
            name: "Tricks are for Kids",
            length: 5
        };
    
    // redirects page!! change to custome directive to use across controllers
    $scope.go = function ( path ) {
        $location.path( path );
    };


}]);