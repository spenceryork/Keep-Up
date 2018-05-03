"use strict"

angular.module('KeepUp', ["ngRoute"]).config($routeProvider => {
    $routeProvider
        .when("/register", {
            templateUrl: "partials/register.html",
            controller: "AuthCtrl"
        })
        .when("/login", {
            templateUrl: "partials/login.html",
            controller: "AuthCtrl"
        })
        .when("/occasions", {
            templateUrl: "partials/occasions.html",
            controller: "OccasionCtrl"
        })
        .otherwise("/");
})