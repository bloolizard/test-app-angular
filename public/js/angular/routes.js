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
    .when('/show_test/:test_id', {
        templateUrl:"partials/show_test.html",
        controller:"SingleTestViewController"
     })
    .otherwise({
            redirectTo:'/' //default angular path
        }

    );
}])
.factory('communicateScope', function($rootScope){
    var title = "";
    var scope = $rootScope.$new(true);
    scope.title = title;
    return scope;
});