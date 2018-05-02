"use strict"

angular.module('KeepUp', ["ngRoute"]).config($routeProvider => {
    $routeProvider
        .when("/register", {
            templateUrl: "partials/register.html",
            controller: "AuthCtrl"
        })
        .otherwise("/");
})