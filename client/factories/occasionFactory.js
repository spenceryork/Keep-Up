"use strict";

angular.module("KeepUp").factory("OccasionFactory", function($http) {

    return {
        postOccasion(occasion) {
            console.log("what occasion did I post?", occasion);
            return $http.post('/occasions', occasion)
        }
    }

})