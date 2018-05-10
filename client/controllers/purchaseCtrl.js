"use strict";

angular.module("KeepUp").controller("PurchaseCtrl", function ($scope, PurchaseFactory, $route, $window, AuthFactory, $location) {

    // THIS CHECKS TO SEE IF THE USER IS LOGGED IN, IF NO USER THEY CANNOT ACCESS PAGE.
    $scope.isLoggedIn = () => {
        if (AuthFactory.getCurrentUser()) {
            return true;
        } else {
            $location.path("/home");
            return false;
        }
    };

    $scope.isLoggedIn();

    $scope.occasion = {};
    $scope.purchase = {};
    $scope.occasion.user_id = null;
    $scope.purchase.user_id = null;


    $scope.$on("handleBroadcast", function (event, user) {
        $scope.occasion.user_id = user.id;
        $scope.purchase.user_id = user.id;

        console.log("Active user in occasion ctrl", user.id);
    });


    PurchaseFactory.getOccasionsAndPurchases()
        .then(data => {
            $scope.purchaseList = data.data.purchases;
            console.log("what is purchaseList?", $scope.purchaseList)
            $scope.occasionList = data.data.occasions;
            console.log("what is occasionList?", $scope.occasionList)
            $scope.total = 0;
            for (var i = 0; i < $scope.purchaseList.length; i++) {
                $scope.total += $scope.purchaseList[i].price;
            }
            console.log("what is the purchase total", $scope.total);
            // console.log("users occasionList in purchase CTRL", $scope.occasionList);
        })


    $scope.addPurchase = (purchase) => {
        PurchaseFactory.postPurchase(purchase)
            .then(purchase => {
                console.log("purchase that was added to DB", purchase);
                    $route.reload("/purchases");
            })
    }

    $scope.getPurchase = (purchase) => {
        purchase.edit = true;
        console.log("what is this", event.target.id)
    }

    $scope.updatePurchase = (purchase_id, purchase) => {
        console.log("purchase to be updated", purchase);
        PurchaseFactory.patchPurchase(purchase_id, purchase)
            .then(purchase => {
                // console.log("purchase was added to DB", purchase);
                $route.reload(`/purchases`);
            });
    }

    $scope.deletePurchase = (purchaseId, purchase) => {
        console.log("what is purchase", purchase, "what is purchaseID", purchaseId)
        PurchaseFactory.deletePurchase(purchaseId, purchase)
            .then(purchase => {
                console.log("Purchase has been deleted!", purchase);
                $route.reload(`/purchases`)
            })
    }

    $scope.cancelEdit = () => {
        $route.reload(`/purchases`)
    }
})