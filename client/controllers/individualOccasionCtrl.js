"use strict";

angular.module("KeepUp").controller("IndividualOccasionCtrl", function($scope, OccasionFactory) {

    OccasionFactory.getOccasionDetails()
    .then( occasion => {
        $scope.occasionDetails = occasion.data;
        console.log("individual occasion details", $scope.occasionDetails);
    })

})