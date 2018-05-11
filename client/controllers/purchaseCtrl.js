"use strict";

angular.module("KeepUp").controller("PurchaseCtrl", function ($scope, PurchaseFactory, $route, $window, AuthFactory, $location) {

    let currentUser = null;

    $scope.occasion = {};
    $scope.purchase = {};
    $scope.occasion.user_id = null;
    $scope.purchase.user_id = null;

    $scope.$on("handleBroadcast", function (event, user) {
        currentUser = user.id;
        $scope.occasion.user_id = user.id;
        $scope.purchase.user_id = user.id;
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
    })


    $scope.addPurchase = (purchase) => {
        PurchaseFactory.postPurchase(purchase)
            .then(purchase => {
                    $route.reload("/purchases");
            })
    }

    $scope.getPurchase = (purchase) => {
        purchase.edit = true;
    }

    $scope.updatePurchase = (purchase_id, purchase) => {
        PurchaseFactory.patchPurchase(purchase_id, purchase)
            .then(purchase => {
                $route.reload(`/purchases`);
            });
    }

    $scope.deletePurchase = (purchaseId, purchase) => {
        PurchaseFactory.deletePurchase(purchaseId, purchase)
            .then(purchase => {
                $route.reload(`/purchases`)
            })
    }

    $scope.cancelEdit = () => {
        $route.reload(`/purchases`)
    }
})