angular.module('testMakerApp.controllers',[])
.controller('HomeViewController', function($scope, communicateScope){
    communicateScope.title = 'HOME';
})
.controller('NewTestViewController', function($scope, communicateScope){
        communicateScope.title = 'NEW TEST';
        $scope.addQuestion = function(event){
            event.preventDefault();
            console.log(event);
        }
})
.controller('MyTestsViewController', function($scope, communicateScope){
        communicateScope.title = 'MY TESTS';

})
.controller('HeaderViewController', function($scope, communicateScope){
    communicateScope.$watch('title', function(){
        $scope.title = communicateScope.title;
    });
})
.controller('RenderTestFormViewController', function($scope, communicateScope){
    communicateScope.$watch('render_test', function(){
        $scope.render_test = communicateScope.render_test;
    });
});