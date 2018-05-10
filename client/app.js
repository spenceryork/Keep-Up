"use strict"

// let isAuth = (AuthFactory) => {
//     return new Promise ( (resolve, reject) => {
//         // AuthFactory.isAuthenticated()
//         AuthFactory.getCurrentUser()
//         .then( (ifUser) => {
//             console.log("what is ifUser", ifUser)
//             if (ifUser) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         });
//     });
// };

// let isAuth = (AuthFactory) => {
//     return new Promise ( (resolve, reject) => {
//         // AuthFactory.isAuthenticated()
//         if(AuthFactory.getCurrentUser()) {
//             resolve()
//         } else {
//             reject()
//         }
//     });
// };

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
        .when("/home", {
            templateUrl: "partials/home.html",
            controller: "NavCtrl"   
        })
        .when("/occasions", {
            templateUrl: "partials/occasions.html",
            controller: "OccasionCtrl",
            // resolve: { isAuth }
        })
        .when("/occasions/:id", {
            templateUrl: "partials/individualOccasion.html",
            controller: "IndividualOccasionCtrl",
            // resolve: { isAuth }
        })
        .when("/purchases", {
            templateUrl: "partials/purchases.html",
            controller: "PurchaseCtrl",
            // resolve: { isAuth }
        })
        .otherwise("/home");
})

// On a page refresh, the currentUser we set in the auth factory is lost, since it's just a variable. We need to be able to ask the backend for the user it has stored in session so we can reestablish who our current user is. Below, we listen for a route change and call a method that will ping the backend for the logged-in user, then broadcast that information via a custom event to the listening controllers ( see the test controller and the movie controller)
angular.module("KeepUp").run(($rootScope, $location, $route, $window, AuthFactory) => {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        AuthFactory.setUserStatus().then(() => {
            AuthFactory.broadcastUserLogin(AuthFactory.getCurrentUser());
        });
    });
});