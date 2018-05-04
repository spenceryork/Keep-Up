"use strict";

angular.module("KeepUp").factory("PurchaseFactory", function($http) {

    return {
        getUserOccasions() {
            return $http.get('/purchases');
        }

    }

})