"use strict";

angular.module("KeepUp").controller("PurchaseCtrl", function ($scope, PurchaseFactory, $route, $window, AuthFactory, $location) {

    // THIS CHECKS TO SEE IF THE USER IS LOGGED IN, IF NO USER THEY CANNOT ACCESS PAGE.
    // $scope.isLoggedIn = () => {
    //     if (AuthFactory.getCurrentUser()) {
    //         return true;
    //     } else {
    //         $location.path("/home");
    //         return false;
    //     }
    // };

    // $scope.isLoggedIn();

    let currentUser = null;

    $scope.occasion = {};
    $scope.purchase = {};
    $scope.occasion.user_id = null;
    $scope.purchase.user_id = null;


    $scope.$on("handleBroadcast", function (event, user) {
        currentUser = user.id;

        $scope.occasion.user_id = user.id;
        $scope.purchase.user_id = user.id;

        console.log("Active user in occasion ctrl", user.id);
    });

    let calculateTotal = (purchases) => {
        $scope.total = 0;
        for (var i = 0; i < purchases.length; i++) {
            $scope.total += purchases[i].price;
        }
    }

    let verifyPurchases = (purchases) => {
        if(purchases.length > 0) {
            $scope.userPurchases = true;
        } else {
            $scope.userPurchases = false;
        }
    }

    PurchaseFactory.getOccasionsAndPurchases()
    .then(data => {
        $scope.purchaseList = data.data.purchases;
        $scope.occasionList = data.data.occasions;
        calculateTotal($scope.purchaseList)
        verifyPurchases($scope.purchaseList)

        // $scope.total = 0;
        // for (var i = 0; i < $scope.purchaseList.length; i++) {
        //     $scope.total += $scope.purchaseList[i].price;
        // }


        // if($scope.purchaseList.length > 0) {
        //     $scope.userPurchases = true;
        // } else {
        //     $scope.userPurchases = false;
        // }

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