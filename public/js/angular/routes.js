angular.module('testMakerApp', ['ngRoute', 'testMakerApp.controllers'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl:"/partials/home.html",
        controller: "HomeViewController"
    }).otherwise({
            redirectTo:'/' //default angular path
        }

    );
}]);