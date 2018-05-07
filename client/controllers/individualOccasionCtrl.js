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
        // $scope.purchasesTotal = $scope.occasionPurchases.forEach( purchase => {
        //     $scope.total = 0;
        //     $scope.total = $scope.total + purchase.price;
        // })
        $scope.total = 0;
        for (var i = 0; i < $scope.occasionPurchases.length; i++) {
                $scope.total = $scope.total + $scope.occasionPurchases[i].price;
                }
                console.log("this is the total", $scope.total);
        // return $scope.total;

    })
})
