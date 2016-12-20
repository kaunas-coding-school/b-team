/**
 * Created by Artės on 2016-12-16.
 */
angular.module('app', ["ngRoute"]).config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "Ignas.html"
        })
        .when("/red", {
            templateUrl : "VaidasS.html"
        })
        .when("/green", {
            templateUrl : "Soccer.html"
        })
        .when("/blue", {
            templateUrl : "Basketball.html"
        });
})


.controller('ArturasRaguckas', function () {
    var ar = this;
    ar.test = "Arturas";
    ar.vardas = "Raguckas";
    ar.par1 = true;
ar.masyvas = ['vienas','du','trys','keturi', '...'];
})