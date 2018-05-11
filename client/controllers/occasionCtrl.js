"use strict";

angular.module("KeepUp").controller("OccasionCtrl", function ($scope, $route, $location, $routeParams, OccasionFactory, AuthFactory) {

    let currentUser = null;

    $scope.occasion = {};
    $scope.occasion.user_id = null;

    $scope.$on("handleBroadcast", function (event, user) {
        currentUser = user.id;
        $scope.occasion.user_id = user.id;
        console.log("Active user in occasion ctrl", user.id);
    });

    OccasionFactory.getUserOccasions()
    .then( occasions => {
        if (occasions.data.length > 0) {
            $scope.occasionList = occasions.data;
            $scope.userOccasions = true;
        } else {
            $scope.userOccasions = false;
        }
    })

    $scope.addOccasion = (occasion) => {
        OccasionFactory.postOccasion(occasion)
        .then( occasion => {
            $route.reload("/occasions");
        })
    }

})