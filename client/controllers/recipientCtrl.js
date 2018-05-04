"use strict";

angular.module("KeepUp").controller("RecipientCtrl", ($scope) => {

    $scope.occasion.user_id = null;

    $scope.$on("handleBroadcast", function (event, user) {
        $scope.occasion.user_id = user.id;
        console.log("Active user in occasion ctrl", user.id);
    });

    $scope.addRecipient()
})