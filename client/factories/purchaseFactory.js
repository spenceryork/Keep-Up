"use strict";

angular.module("KeepUp").factory("PurchaseFactory", function($http) {

    return {
        postPurchase(purchase) {
            return $http.post('/purchases', purchase)
        },
        getOccasionsAndPurchases() {
            return $http.get('/purchases')
        },
        getPurchaseDetails(purchase_id) {
            return $http.get(`/purchases/${purchase_id}`)
        },
        patchPurchase(purchase_id, purchase) {
            return $http.patch(`/purchases/${purchase_id}`, purchase)
        },
        deletePurchase(purchase_id) {
            return $http.delete(`/purchases/${purchase_id}`)
        },
        getOccasionsAndPurchases() {
            return $http.get('/purchases')
        }
        // getOccasionsAndPurchases(purchase_id) {
        //     return $http.get(`/purchases`)
        // }
        

    }

})