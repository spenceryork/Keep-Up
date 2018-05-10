"use strict";

angular.module("KeepUp").controller("OccasionCtrl", function ($scope, $route, $location, $routeParams, OccasionFactory, AuthFactory) {

    // THIS CHECKS TO SEE IF THE USER IS LOGGED IN, IF NO USER THEY CANNOT ACCESS PAGE. HOWEVER WHEN THE PAGE IS REFRESHED THE USER IS SENT TO THE HOME PAGE.
    // $scope.isLoggedIn = () => {
    //     if (AuthFactory.getCurrentUser()) {
    //         // $location.path("/occasions")
    //         return true;
    //     } else {
    //         $location.path("/home");
    //         return false;
    //     }
    // };

    // $scope.isLoggedIn();

    let currentUser = null;

    $scope.occasion = {};
    $scope.occasion.user_id = null;

    $scope.$on("handleBroadcast", function (event, user) {
        currentUser = user.id;
        $scope.occasion.user_id = user.id;
        console.log("Active user in occasion ctrl", user.id);
    });

    OccasionFactory.getUserOccasions()
    .then( occasions => {
        if (occasions.data.length > 0) {
            $scope.occasionList = occasions.data;
            $scope.userOccasions = true;
        } else {
            $scope.userOccasions = false;
        }
    })

    $scope.addOccasion = (occasion) => {
        OccasionFactory.postOccasion(occasion)
        .then( occasion => {
            // console.log("occasion was added to DB", occasion);
            $route.reload("/occasions");
        })
    }

})