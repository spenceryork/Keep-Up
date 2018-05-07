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
        getOccasionDetails(occasion_id) {
            return $http.get(`/occasions/${occasion_id}`)
        },
        editOccasion(occasion_id) {
            return $http.patch(`/occasions/${occasion_id}`)
        },
        deleteOccasion(occasion_id) {
            return $http.delete(`/occasions/${occasion_id}`)
        }

    }

})