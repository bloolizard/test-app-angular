angular.module('testMakerApp.controllers',[])
.controller('HomeViewController', function($scope, communicateScope){
    communicateScope.title = 'HOME';
})
.controller('NewTestViewController', function($scope, communicateScope){
        communicateScope.title = 'NEW TEST';

        $scope.isTestReady = false;

        $scope.testNameEnter = function(event){
            if (event.keyCode === 13){
                $scope.createTest();
            }
        };

        $scope.createTest = function(){
            if ($scope.f.testName != undefined){
                // disable form
                ($scope.isTestReady == false) ? $scope.isTestReady = true : $scope.isTestReady = false;

                // store test :todo using factory?

            }

        };

        $scope.addQuestion = function(event){
            event.preventDefault();
            console.log(event);
        };
        $scope.finishedTest = function(event){
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
.controller('RenderTestPreviewViewController', function($scope, communicateScope){
    communicateScope.$watch('render_test', function(){
        $scope.render_test = communicateScope.render_test;

    });
});