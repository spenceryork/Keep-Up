"use strict";

angular.module("KeepUp").controller("IndividualOccasionCtrl", function($scope, OccasionFactory, $routeParams) {

    OccasionFactory.getOccasionDetails($routeParams.id)
    .then( occasion => {
        $scope.occasionDetails = occasion.data;
        console.log("individual occasion details", $scope.occasionDetails);
    })



})