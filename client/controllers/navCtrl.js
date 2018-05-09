"use strict";

angular.module("KeepUp").controller("NavCtrl", function($scope, AuthFactory, $window) {

    let currentUser = null;

    $scope.$on("handleBroadcast", function (event, user) {
        currentUser = user.id;
        console.log("Active user in occasion ctrl", user.id);
        if (currentUser) {
            $scope.loggedIn = true;
        } else {
            $scope.loggedIn = false;   
        }
    });

    $scope.go = (navUrl) => {
        if (navUrl === "#!/home") {
          AuthFactory.logoutUser();
        } else {
          $window.location.href = navUrl;
        }
    };


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
        {
            name: "Logout",
            url: "#!/home"
        }
    ];

})