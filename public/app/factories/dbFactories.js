
// factories for reading and writing to the different objects in the database, used in 3 way data  binding  **** may turn into a service that can be called, moving code out of the controller ***


// --- retrieve user data
climbLog.factory('Profile', ['$firebaseObject', function($firebaseObject){
    
    return function(userId) {
        // use the uid stored in the auth object
        
        // create a ref to the users db
        var ref = firebase.database().ref('users');
        var profileRef = ref.child(userId);
        
        return $firebaseObject(profileRef);
    };
}]);

//---------------------------------------------------------------------------

// --- retrieve locations data
climbLog.factory('Locations', ['$firebaseObject', function($firebaseObject){
    
    return function(locationId) {
        // use the uid stored in the auth object
        
        // create a ref to the users db
        var ref = firebase.database().ref('locations');
        var locationRef = ref.child(locationId);
        
        return $firebaseObject(locationRef);
    };
}]);

//---------------------------------------------------------------------------

// --- retrieve Routes data
climbLog.factory('Routes', ['$firebaseObject', function($firebaseObject){
    
    return function(routeId) {
        // use the uid stored in the auth object
        
        // create a ref to the users db
        var ref = firebase.database().ref('routes');
        var routeRef = ref.child(routeId);
        
        return $firebaseObject(routeRef);
    };
}]);

//---------------------------------------------------------------------------

// --- retrieve Session data
climbLog.factory('Sessions', ['$firebaseObject', function($firebaseObject){
    
    return function(sessionId) {
        // use the uid stored in the auth object
        
        // create a ref to the users db
        var ref = firebase.database().ref('sessions');
        var sessionRef = ref.child(sessionId);
        
        return $firebaseObject(sessionRef);
    };
}]);