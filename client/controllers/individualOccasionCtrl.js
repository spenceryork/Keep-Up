"use strict";

angular.module("KeepUp").controller("IndividualOccasionCtrl", function($scope, OccasionFactory, $routeParams, PurchaseFactory) {

    let currentUser = null;

    $scope.$on("handleBroadcast", function (event, user) {
        currentUser = user.id;
        console.log("Active user in occasion ctrl", user.id);
    });

    OccasionFactory.getOccasionDetails($routeParams.id)
    .then( occasion => {
        $scope.occasion = occasion.data;
        $scope.occasionPurchases = occasion.data[0].Purchases;
        console.log("individual occasion details", $scope.occasionPurchases);
    })

    // PurchaseFactory.getPurchases($routeParams.id)
    // .then( purchases => {
    //     $scope.purchases = purchases.data;
    //     console.log("purches", $scope.purchases);
    // })



})