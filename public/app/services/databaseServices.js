// try calling Auth inside of this service and takingit out of the controller. Allow the controller to have acces to the user profile
// try calling Auth inside of this service and takingit out of the controller. Allow the controller to have acces to the user profile

climbLog.service('databaseServices', [function(){
    
    var ref = config.databaseURL;
    var sessionKey = null;

    
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
        
    };
    
    function addSession(uid,sessionInfo){
        
        var newPostKey = firebase.database().ref().child('sessions').push().key;
        sessionKey = newPostKey;
        console.log(sessionKey);
        //firebase.database().ref('sessions/' + newPostKey).update(sessionInfo);
        
        var addSessionToUser = {
                name: sessionInfo.name,
                location: sessionInfo.location,
                sessionDate: sessionInfo.sessionDate
            };
        
        var updates = {};
            updates['/sessions/' + newPostKey] = sessionInfo;
            updates['/users/' + uid + '/sessions/' + newPostKey] = addSessionToUser;

        return firebase.database().ref().update(updates);
    }
    
    function addRoute(uid, sessionData){
            //console.log("service function function works");
        var newPostKey = firebase.database().ref().child('routes').push().key;
        
        var addRouteToUser = {
            name: sessionData.route.name,
            date: sessionData.sessionDate
        };
        
        var addRouteToSessions = {
            name: sessionData.route.name,
            grade: sessionData.route.grade,
            scale: null // need to add scale select to add route
        };
        var addRouteToLocations = {
            
            name: sessionData.route.name,
            date: sessionData.sessionDate,
            grade: sessionData.route.grade
            
        };
        
        var addRouteToRoutes = {
            name: sessionData.route.name,
            grade: sessionData.route.grade,
            location: sessionData.location,
            date: sessionData.sessionDate
        };
        
        var updates = {};
        updates['/routes/' + newPostKey] = addRouteToRoutes;
        updates['/users/' + uid + '/routes/' + newPostKey] = addRouteToUser;
        updates['/sessions/' + sessionKey + '/routes/' + newPostKey ] = addRouteToSessions;
        updates['/locations/' + sessionData.location + '/routes/' + newPostKey] = addRouteToLocations;
        
        return firebase.database().ref().update(updates);
        /* there needs to be a function to search for existing locations and determine if the one being submited is the same or different then the one save */
        
    }
    
    return {
            createUser : createUser,
            addSession : addSession,
            addRoute   : addRoute
           };
    
}]);