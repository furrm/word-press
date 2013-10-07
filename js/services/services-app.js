"use strict";

angular.module('services-app', [])
.factory('manifestService', function($resource){
    return{
        "name":'manifestService',
        "getManifest": function(){
            return $resource('js/app/manifest.json').get();
        },
        "authorize": function(){
            console.log("Authorizing");
            return $resource('https://public-api.wordpress.com/oauth2/authorize?client_id=23130&redirect_uri=https://wordpress.com/&response_type=code').get();
        }
    }
})
;