"use strict";

angular.module('controllers-app', []).controller('appCtrl', function ($scope, manifestService) {
    $scope.name = 'appCtrl'
    $scope.serviceName = manifestService.name;
    $scope.appManifest = manifestService.getManifest();

    $scope.authorize = function(){
        console.log("Clicked Authorize");
       $scope.output = manifestService.authorize();
    }
});