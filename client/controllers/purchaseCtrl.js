"use strict";

angular.module("KeepUp").controller("PurchaseCtrl", function($scope, PurchaseFactory) {

    $scope.occasion = {};
    $scope.purchase = {};
    

    $scope.occasion.user_id = null;
    $scope.purchase.user_id = null;


    $scope.$on("handleBroadcast", function (event, user) {
        $scope.occasion.user_id = user.id;
        $scope.purchase.user_id = user.id;

        console.log("Active user in occasion ctrl", user.id);
    });

    PurchaseFactory.getUserOccasions()
    .then( occasions => {
        $scope.occasionList = occasions.data;
        console.log("users occasionList in purchase CTRL", $scope.occasionList);
    })

    $scope.addPurchase = () => {
        PurchaseFactory.postPurchase(purchase)
        .then( purchase => {
            console.log("purchase that was added to DB");
            $route.reload("/purchases");
            $().alert('close');
        })
    }

    $scope.addOccasion = (occasion) => {
        OccasionFactory.postOccasion(occasion)
        .then( occasion => {
            console.log("occasion was added to DB", occasion);
            $route.reload("/occasions");
        })
    }
})