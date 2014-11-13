angular.module('testMakerApp.controllers',[])
.controller('HomeViewController', function($scope, communicateScope){
    communicateScope.title = 'HOME';
})
.controller('NewTestViewController', function($scope, communicateScope){
        communicateScope.title = 'NEW TEST';
})
.controller('MyTestsViewController', function($scope, communicateScope){
        communicateScope.title = 'MY TESTS';

})
.controller('HeaderViewController', function($scope, communicateScope){
    communicateScope.$watch('title', function(){
        $scope.title = communicateScope.title;
    });
});