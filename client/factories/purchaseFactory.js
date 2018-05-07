"use strict";

angular.module("KeepUp").factory("PurchaseFactory", function($http) {

    return {
        postPurchase(purchase) {
            return $http.post('/purchases', purchase)
        },
        getUserOccasions() {
            return $http.get('/purchases')
        },
        getPurchases(occasion_id) {
            return $http.get(`/occasions/${occasion_id}`)
        }
    }

})