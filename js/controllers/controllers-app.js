"use strict";

angular.module('controllers-app', []).controller('appCtrl', function ($scope, manifestService, $window, $location) {
    $scope.name = 'appCtrl'
    $scope.serviceName = manifestService.name;
    $scope.appManifest = manifestService.getManifest();

    var wordPressVars = {
        "authorizationEndpoint":"",
        "tokenEndpoint":"https://public-api.wordpress.com/oauth2/token",
        "client_id": "23850",
        "redirect_uri": "http://mobile-cms.azurewebsites.net",
        "client_secret": "iHgspqA7awWzRYOk6R9SkAdsI6JMstyXHlQkdHlQdz1ysWdomhDWafG0mMqXfbhE",
        "code": "",
        "grant_type": "authorization_code"
    }

    wordPressVars.authorizationEndpoint = "https://public-api.wordpress.com/oauth2/authorize?client_id="
        + wordPressVars.client_id + "&redirect_uri="
        + wordPressVars.redirect_uri + "&response_type=code"



    $scope.wordPress = wordPressVars;





    $scope.authorize = function () {
        console.log("Clicked Authorize");

        console.log(wordPressVars);
//       $scope.output = manifestService.authorize();
        $window.location.href = wordPressVars.authorizationEndpoint;
    }

    $scope.requestToken = function () {
        console.log('Clicked requestToken()');
        //console.log($location.search('code'));
        var dataToSend = wordPressVars;

        $scope.output = manifestService.getToken(dataToSend);
    }
});