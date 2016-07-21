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
    $routeProvider.when('/login', {
        controller: "authCtrl",
        templateUrl: "app/views/login.html"
    }).when('/register', {
        controller: "authCtrl",
        templateUrl: "app/views/register.html"
    }).when('/settings', {
        controller: "settingsCtrl",
        templateUrl: "app/views/settings.html"
    }).when('/welcome', {
        controller: "mainCtrl",
        templateUrl: "app/views/welcome.html"
    }).when("/logRoutes", {
        controller: "logRoutesCtrl",
        templateUrl: "app/views/logRoutes.html"
    }).when("/home", {
        controller: "mainCtrl",
        templateUrl: "app/views/home.html"
    }).when('/ratingsScale', {
        controller: "settingsCtrl",
        templateUrl: "app/views/ratingsScale.html"
    }).otherwise({
        redirectTo: '/welcome'
    });
}]);