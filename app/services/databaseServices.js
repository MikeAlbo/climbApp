// try calling Auth inside of this service and takingit out of the controller. Allow the controller to have acces to the user profile
// try calling Auth inside of this service and takingit out of the controller. Allow the controller to have acces to the user profile

climbLog.service('databaseServices', [function(){
    
    var ref = config.databaseURL;
    
    function createUser(uid, email, name, scale, usePoints){
        
        var userProfile = {
            "email" : email,
            "name": name,
            "settings" : {
                "scale" : scale,
                "usePoints" : usePoints
            }
        };
        
        firebase.database().ref('users/' + uid).set(userProfile);
        
    }
    
    return {createUser};
    
}]);