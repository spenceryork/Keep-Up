"use strict";

angular.module("KeepUp").controller("IndividualOccasionCtrl", function($scope, OccasionFactory, $routeParams, PurchaseFactory, $route, $location) {

    let currentUser = null;

    $scope.$on("handleBroadcast", function (event, user) {
        currentUser = user.id;
        console.log("Active user in occasion ctrl", user.id);
    });

    OccasionFactory.getOccasionDetails($routeParams.id)
    .then( occasion => {
        console.log("occasion", occasion);
        $scope.occasion = occasion.data;
        $scope.occasionPurchases = occasion.data[0].Purchases;   
        console.log("occasion purchases", $scope.occasionPurchases);   
        $scope.total = 0;
        for (var i = 0; i < $scope.occasionPurchases.length; i++) {
            $scope.total += $scope.occasionPurchases[i].price;
        }
        console.log("this is the total", $scope.total);
    })

    $scope.getOccasion = (index) => {
        $scope.editMode = "edit";
        console.log("getOccasion is getting clicked")
        OccasionFactory.getOccasionDetails($routeParams.id)
        .then( occasion => {
            $scope.occasion = occasion.data;
            console.log("occasion date", $scope.occasion);
        });
    }

    $scope.updateOccasion = (occasion_id, occasion) => {
        console.log("occasion to be updated", occasion);
        OccasionFactory.patchOccasion($routeParams.id, occasion)
        .then( occasion => {
            // console.log("occasion was added to DB", occasion);
            $route.reload(`/occasions/${occasion_id}`);
        });
    }

    $scope.cancelEdit = () => {
        $route.reload(`/occasions/${$routeParams.id}`)
    }

    $scope.deleteOccasion = () => {
        OccasionFactory.getOccasionDetails($routeParams.id)
        .then( occasion => {
            console.log("occasion purchases", $scope.occasionPurchases);   
            if( $scope.occasionPurchases.length > 0 ) {
                console.log("This Occasion cannot be deleted. Purchases are currently assigned to it.")
            } else {
                OccasionFactory.deleteOccasion($routeParams.id)
                .then( occasion => {
                    console.log("occasion has been deleted!");
                    $location.url("/occasions");
                });
            };
        });
    };
    

    $scope.getPurchase = (purchase) => {
        purchase.edit = true;
        console.log("what is this", event.target.id)
    }

    $scope.deletePurchase = (purchaseId, purchase) => {
        console.log("what is purchase", purchase, "what is purchaseID", purchaseId)
        PurchaseFactory.deletePurchase(purchaseId, purchase)
        .then( purchase => {
            console.log("Purchase has been deleted!", purchase);
            $route.reload(`/occasions/${$routeParams.id}`)
        })
    }

    $scope.updatePurchase = (purchase_id, purchase) => {
        console.log("purchase to be updated", purchase);
        PurchaseFactory.patchPurchase(purchase_id, purchase)
        .then( purchase => {
            // console.log("purchase was added to DB", purchase);
            $route.reload(`/occasion/${$routeParams.id}`);
        });
    }


})
