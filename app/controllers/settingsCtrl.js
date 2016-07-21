// settings ctrl

climbLog.controller('settingsCtrl', ['$scope', function($scope){
    
    $scope.usePoints = true;
    $scope.scaleSelect = '';
    
    $scope.user = {
        email: "malbo24@gmail.com",
        name: "Michael Albonetti"
    };
    
    $scope.updateScale = function(){
        alert("this will update the scale");
    }
    
    
    // change scale
    
    // init scale
    
    $scope.scale = {
        name: "Yosemite Decimal System",
        usage: "America!",
        grades: {
            grade1: {
            name: "5.2",
            point: ".25"
        }, 
        grade2: {
            name: "5.3",
            point: ".5"
        },
        grade3: {
            name: "5.4",
            point: ".75"
        },
        grade4: {
            name: "5.5",
            point: "1"
        },
        grade5: {
            name: "5.6",
            point: "1.5"
        },
        grade6: {
            name: "5.7",
            point: "2"
        },
        grade7: {
            name: "5.8",
            point: "2.5"
        },
        grade8: {
            name: "5.9",
            point: "3"
        },
        grade9: {
            name: "5.10a",
            point: "3.5"
        },grade10: {
            name: "5.10b",
            point: "4"
        },grade11: {
            name: "5.10c",
            point: "4.5"
        },grade12: {
            name: "5.10d",
            point: "5"
        },
        grade13: {
            name: "5.11a",
            point: "5.5"
        },
        grade14: {
            name: "5.11b",
            point: "6"
        },grade15: {
            name: "5.11c",
            point: "6.5"
        },grade16: {
            name: "5.11d",
            point: "7"
        },grade17: {
            name: "5.12a",
            point: "7.5"
        },grade18: {
            name: "5.12b",
            point: "8"
        },grade19: {
            name: "5.12c",
            point: "8.5"
        },grade20: {
            name: "5.12d",
            point: "9"
        },grade21: {
            name: "5.13a",
            point: "9.5"
        },grade22: {
            name: "5.13b",
            point: "10"
        },grade23: {
            name: "5.13c",
            point: "10.5"
        },grade24: {
            name: "5.13d",
            point: "11"
        },grade25: {
            name: "5.14a",
            point: "11.5"
        },grade26: {
            name: "5.14b",
            point: "12"
        },grade27: {
            name: "5.14c",
            point: "12.5"
        },grade28: {
            name: "5.14d",
            point: "13"
        },grade29: {
            name: "5.15a",
            point: "13.5"
        },
        }
        
        
    };
}]);