var climbLog = angular.module("climbLog", ["firebase", "ngRoute"]);


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA52Hp772jL1fcEk8WU_py3-VG1MC0X2Kg",
    authDomain: "climblikeaboss-3d2b0.firebaseapp.com",
    databaseURL: "https://climblikeaboss-3d2b0.firebaseio.com",
    storageBucket: ""
  };
  
    firebase.initializeApp(config);


// routing

climbLog.config(["$routeProvider", function($routeProvider){
   $routeProvider.
    when("/login", {
               templateUrl: "views/login.html",
               controller: "authCtrl"
           }).
    when("/register", {
               templateUrl: "views/register.html",
               controller: "authCtrl"
           }).
    when("/settings", {
               templateUrl: "views/settings.html",
               controller: "settingsCtrl"
           }).
    when("/logRoutes", {
                templateUrl: "views/addRoutes.html",
                controller: "logRouteCtrl"
        }).
    otherwise({
       redirectTo: "/login"
   });
}]);