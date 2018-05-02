"use strict";

angular.module("KeepUp").factory("AuthFactory", ($http) => {

    let currentUser = null;

    return {
        createUser(userObj) {
            console.log("user obj", userObj);
            return $http.post("/register", userObj).then(userData => {
                console.log("new user added", userData.data);
                currentUser = userData;
                return userData.data;
            });
        },

        loginUser(userObj) {
            return $http.post("/login", userObj).then(user => {
                currentUser = user.data;
            });
        },

        getCurrentUser() {
            return currentUser;
        }
    };

})