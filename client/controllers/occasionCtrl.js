"use strict";

angular.module("KeepUp").controller("OccasionCtrl", function ($scope, OccasionFactory) {

    $scope.occasion = {};

    let activeUser = null;

    // $scope.$on("handleBroadcast", function (event, user) {
    //     activeUser = user.id;
    //     console.log("Active user in occasion ctrl", activeUser);
    // });

    $scope.addOccasion = (occasion) => {
        console.log("occasion to add", occasion);
        console.log("active user", activeUser);
        OccasionFactory.postOccasion(occasion)
        .then( occasion => {
            console.log("occasion was added to DB", occasion);
        })
    }

    $scope.getOneOccasions = () => {

    }

    $scope.deleteOneOccasion = () => {

    }

    $scope.editOneOccasion = () => {

    }

})