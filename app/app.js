var climbLog = angular.module("climbLog", ["firebase", "ngRoute", "ngAnimate"]);


  

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA52Hp772jL1fcEk8WU_py3-VG1MC0X2Kg",
    authDomain: "climblikeaboss-3d2b0.firebaseapp.com",
    databaseURL: "https://climblikeaboss-3d2b0.firebaseio.com",
    storageBucket: ""
  };
  
    firebase.initializeApp(config);

// catch login errors and redirec tuser
    climbLog.run(["$rootScope", "$location", function($rootScope, $location) {
      $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
        // We can catch the error thrown when the $requireSignIn promise is rejected
        // and redirect the user back to the home page
        if (error === "AUTH_REQUIRED") {
          $location.path("/welcome");
        }
      });
    }]);


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
        templateUrl: "app/views/settings.html",
        resolve: {
            "currentAuth": ["Auth", function(Auth){
                return Auth.$requireSignIn();
            }]
        }
    }).when('/welcome', {
        controller: "mainCtrl",
        templateUrl: "app/views/welcome.html"
    }).when("/logRoutes", {
        controller: "mainCtrl",
        templateUrl: "app/views/logRoutes.html",
        resolve: {
            "currentAuth": ["Auth", function(Auth){
                return Auth.$requireSignIn();
            }]
        }
    }).when("/home", {
        controller: "mainCtrl",
        templateUrl: "app/views/home.html",
        resolve: {
            "currentAuth": ["Auth", function(Auth){
                return Auth.$requireSignIn();
            }]
        }
    }).when('/ratingsScale', {
        controller: "settingsCtrl",
        templateUrl: "app/views/ratingsScale.html",
        resolve: {
            "currentAuth": ["Auth", function(Auth){
                return Auth.$requireSignIn();
            }]
        }
    }).otherwise({
        redirectTo: '/welcome'
    });
}]);