/**
 * Created by Lenovo T550 on 16/12/2016.
 */

angular.module('App', ["ngRoute"]).config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "Arturas.html"
        })
        .when("/red", {
            templateUrl : "Ignas.htm"
        })
        .when("/green", {
            templateUrl : "povilas.zilionis.htm"
        })
        .when("/blue", {
            templateUrl : "Soccer.htm"
        });
}).controller ('VaidasSurblys', function() {
var vs = this;
    vs.kintamasis = 'Labas';
    vs.Vardas = "Jonas";
    vs.Pavarde = "Jonaitis";
    vs.par1=true;

    vs.masyvas = ['Vienas', 'Du', 'Trys', 'Keturi', '...' ];

});


