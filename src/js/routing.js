/**
 * Created by Lenovo T550 on 20/12/2016.
 */

App.config(function($routeProvider) {
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
})
