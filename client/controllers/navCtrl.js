"use strict";

angular.module("KeepUp").controller("NavCtrl", function ($scope, AuthFactory, $window, $location) {


    let currentUser = null;

    $scope.isLoggedIn = () => {
        if (AuthFactory.getCurrentUser()) return true;
        else return false;
    };

    $scope.$on("handleBroadcast", function (event, user) {
        currentUser = user.id;
        console.log("Active user in nav ctrl", user.id);
        if (currentUser) {
            $scope.loggedIn = true;
        } else {
            $scope.loggedIn = false;
        }
    });




    $scope.navBar = [
        {
            name: "Occasions",
            url: "#!/occasions"
        },
        {
            name: "Purchases",
            url: "#!/purchases"
        },
        {
            name: "Login",
            bang: "!",
            url: "#!/login"
        },
        // {
        //     name: "Logout",
        //     url: "#!/home"
        // }
    ];

    // NOT USED ANYMORE THANKS TO ARWA'S WORK AROUND
    // $scope.go = (navUrl) => {
    //     console.log("navurl", navUrl);
    //     if (navUrl === "#!/home") {
    //         AuthFactory.logoutUser()
    //             .then(data => {
    //                 console.log("what is this data??", data);
    //             })
    //     } else {
    //         $window.location.href = navUrl;
    //     }
    // };
})