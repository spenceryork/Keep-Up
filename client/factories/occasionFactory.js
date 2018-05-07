"use strict";

angular.module("KeepUp").factory("OccasionFactory", function($http) {

    return {
        postOccasion(occasion) {
            return $http.post('/occasions', occasion);
        },
        getUserOccasions() {
            return $http.get('/occasions');
        },
        getOccasionDetails(occasion_id) {
            return $http.get(`/occasions/${occasion_id}`)
        },
        patchOccasion(occasion_id, occasion) {
            return $http.patch(`/occasions/${occasion_id}`, occasion)
        },
        deleteOccasion(occasion_id) {
            return $http.delete(`/occasions/${occasion_id}`)
        }
    }

})