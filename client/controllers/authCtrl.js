"use strict";

angular.module("KeepUp").controller("AuthCtrl", function ($scope, $location, AuthFactory) {
    $scope.userAccount = {};
    $scope.newUserAccount = {};

    $scope.register = () => {
        $scope.errorMessage = "";
        if ($scope.newUserAccount.password !== $scope.newUserAccount.passwordConfirmation) {
            console.log("bad match");
            $scope.errorMessage =
                "Password and confirmation don't match. Please try again";
            return null;
        }
        AuthFactory.createUser($scope.newUserAccount).then(() => {
            $location.path("/occasions");
        });
    };

    $scope.login = () => {
        console.log("scope account?", $scope.userAccount);
        AuthFactory.loginUser($scope.userAccount).then(() => {
            $location.path("/occasions");
        });
    };

})