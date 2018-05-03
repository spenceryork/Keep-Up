"use strict";

angular.module("KeepUp").controller("OccasionCtrl", function ($scope, OccasionFactory) {

    $scope.occasion = {};

    $scope.occasion.user_id = null;

    $scope.$on("handleBroadcast", function (event, user) {
        $scope.occasion.user_id = user.id;
        console.log("Active user in occasion ctrl", user.id);
    });

    $scope.addOccasion = (occasion) => {
        OccasionFactory.postOccasion(occasion)
        .then( occasion => {
            console.log("occasion was added to DB", occasion);
        })
    }

    OccasionFactory.getUserOccasions()
    .then( occasions => {
        $scope.occasions = occasions;
        console.log("users occasions", occasions);
    })

    $scope.getOneOccasions = () => {

    }

    $scope.deleteOneOccasion = () => {

    }

    $scope.editOneOccasion = () => {

    }

})