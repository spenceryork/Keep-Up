"use strict";

angular.module("KeepUp").factory("AuthFactory", function($q, $http, $rootScope, $location) {

    let currentUser = null;

    return {
        createUser(userObj) {
            return $q((resolve, reject) => {
                $http.post("/register", userObj).then(userData => {
                    currentUser = userData;
                    resolve(userData.data);
                });
            }).catch(err => {
                reject(err);
            });
        },

        loginUser(userObj) {
            return $q((resolve, reject) => {
                $http.post("/login", userObj).then(user => {
                    currentUser = user.data;
                    resolve(user.data);
                });
            }).catch(err => {
                reject(err);
            });
        },
        logoutUser() {
            return $q((resolve, reject) => {
                $http.post("/logout").then(user => {
                    console.log("might be logged out???")
                    currentUser = null;
                    resolve();
                });
            }).catch(err => {
                reject(err);
            });
        },

        getCurrentUser() {
            return currentUser;
        },

        // This is called from app.js as a way of confirming whether or not we have a loged-in user. If so, we set currentUser to that value
        setUserStatus() {
            return $http
                .get("/status")
                .then(user => {
                    if (user) {
                        currentUser = user.data;
                    } else {
                        currentUser = null;
                    }
                })
                .catch(() => {
                    currentUser = null;
                });
        },

        broadcastUserLogin(user) {
            if(!user.id) {
                $location.path("/")
            } else {
                $rootScope.$broadcast("handleBroadcast", user);
            }
        }
    };
});