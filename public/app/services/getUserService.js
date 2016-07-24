climbLog.service('getUserService', ["Auth", function(Auth){
    
    var user = {};
    
    
    function getUser(user){
        if(!user){
            var res = Auth.$getAuth();
            console.log("fetched User");
            
            user = {
                uid: res.uid,
                email: res.email
            };
            
            return user;
            
        } else {
            console.log("returned presistant User");
            return user;
            
        }
    }
    
    
    
    return { getUser };
}]);