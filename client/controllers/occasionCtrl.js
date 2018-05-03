"use strict";

angular.module("KeepUp").controller("OccasionCtrl", function ($scope, $route, OccasionFactory) {

    $scope.occasion = {};

    $scope.occasion.user_id = null;

    $scope.$on("handleBroadcast", function (event, user) {
        $scope.occasion.user_id = user.id;
        console.log("Active user in occasion ctrl", user.id);
    });
    
    OccasionFactory.getUserOccasions()
    .then( occasions => {
        $scope.occasionList = occasions.data;
        console.log("users occasionList", $scope.occasionList);
    })

    $scope.addOccasion = (occasion) => {
        OccasionFactory.postOccasion(occasion)
        .then( occasion => {
            console.log("occasion was added to DB", occasion);
            $route.reload("/occasions");
        })
    }


    $scope.getOneOccasion = (occasion_id) => {
        OccasionsFactory.getOccasion(occasion_id)
        .then( occastion => {
            $scope.occasion;
        })

    }

    $scope.deleteOneOccasion = () => {

    }

    $scope.editOneOccasion = () => {

    }

})