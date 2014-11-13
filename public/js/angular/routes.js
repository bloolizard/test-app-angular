angular.module('testMakerApp', ['ngRoute', 'testMakerApp.controllers'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl:"/partials/home.html",
        controller: "HomeViewController"
    })
    .when('/new_test', {
        templateUrl:"partials/new_test.html",
        controller: "NewTestViewController"
    })
    .when('/my_tests', {
        templateUrl:"partials/my_tests.html",
        controller: "MyTestsViewController"
     })
    .otherwise({
            redirectTo:'/' //default angular path
        }

    );
}]);