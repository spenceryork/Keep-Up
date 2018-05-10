"use strict";

angular.module("KeepUp").controller("AuthCtrl", function ($scope, $location, AuthFactory) {
    $scope.userAccount = {};

    $scope.register = () => {
        $scope.errorMessage = "";
        if ($scope.userAccount.password !== $scope.userAccount.passwordConfirmation) {
            console.log("bad match");
            $scope.errorMessage =
                "Password and confirmation don't match. Please try again";
            return null;
        }
        AuthFactory.createUser($scope.userAccount).then(() => {
            // console.log("User created", $scope.userAccount)
            $location.path("/");
        });
    };

    $scope.login = () => {
        console.log("scope account?", $scope.userAccount);
        AuthFactory.loginUser($scope.userAccount).then(() => {
            // console.log("logged in controller", AuthFactory.getCurrentUser());
            $location.path("/");
        });
    };
    
    // I CREATED THIS BUT IT DOESN'T WORK
    // $scope.logout = () => {
    //     console.log("user logged out", $scope.userAccount);
    //     AuthFactory.logoutUser().then(() => {
            
    //         // console.log("logged in controller", AuthFactory.getCurrentUser());
    //         // $location.path("/home");
    //     });  
    // }
})