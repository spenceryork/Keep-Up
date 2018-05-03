"use strict";

angular.module("KeepUp").controller("OccasionCtrl", function($scope, OccasionFactory) {

    let occasion = {};

    $scope.addOccasion = () => {
        console.log("occasion to add", occasion);
        OccasionFactory.postOccasion = ({user_id, title, date, budget})
    }

    $scope.getOneOccasions = () => {
        
    }

    $scope.deleteOneOccasion = () => {
        
    }

    $scope.editOneOccasion = () => {
        
    }

})