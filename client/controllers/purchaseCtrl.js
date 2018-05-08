"use strict";

angular.module("KeepUp").controller("PurchaseCtrl", function($scope, PurchaseFactory, $route) {

    $scope.occasion = {};
    $scope.purchase = {};
    

    $scope.occasion.user_id = null;
    $scope.purchase.user_id = null;


    $scope.$on("handleBroadcast", function (event, user) {
        $scope.occasion.user_id = user.id;
        $scope.purchase.user_id = user.id;

        console.log("Active user in occasion ctrl", user.id);
    });

    // PurchaseFactory.getOccasionsAndPurchases()
    // .then( data => {
    //     console.log("what is data?", data.data)
    //     $scope.occasionList = data.data;
    //     $scope.purchaseList = ""
    //     // console.log("users occasionList in purchase CTRL", $scope.occasionList);
    // })

    PurchaseFactory.getOccasionsAndPurchases()
    .then( data => {
        $scope.purchaseList = data.data.purchases;
        console.log("what is purchaseList?", $scope.purchaseList)
        $scope.occasionList = data.data.occasions;
        console.log("what is occasionList?", $scope.occasionList)
        // console.log("users occasionList in purchase CTRL", $scope.occasionList);
    })

    // PurchaseFactory.getOccasionsAndPurchases()
    // .then( data => {
    //     console.log("what am I receiving?", data);
    // })

    // $scope.addPurchase = (purchase) => {
    //     PurchaseFactory.postPurchase(purchase)
    //     .then( purchase => {
    //         console.log("purchase that was added to DB", purchase);
    //         $route.reload("/purchases");
    //     })
    // }
})