"use strict";

angular.module("KeepUp").factory("OccasionFactory", function($http) {

    return {
        postOccasion(occasion) {
            // console.log("what occasion did I post?", occasion);
            return $http.post('/occasions', occasion);
        },
        getUserOccasions() {
            return $http.get('/occasions');
        },
        // getOccasion() {
        //     return $http.get('/occasions/:id');
        // },
        getOccasionDetails(occasion_id) {
            return $http.get(`/occasions/${occasion_id}`)
        }

    }

})