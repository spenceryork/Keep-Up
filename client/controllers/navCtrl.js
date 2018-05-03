"use strict";

angular.module("KeepUp").controller("NavCtrl", function($scope, AuthFactory) {

    $scope.navBar = [
        {
            name: "Occasions",
            url: "#!/occasions"
        },
        {
            name: "Recipients",
            url: "#!/recipients"
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