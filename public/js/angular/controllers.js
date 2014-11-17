angular.module('testMakerApp.controllers',[])
.controller('HomeViewController', function($scope, communicateScope){
    communicateScope.title = 'HOME';
})
.controller('NewTestViewController', function($scope, communicateScope){
        communicateScope.title = 'NEW TEST';

        $scope.test = {
            test_name: "",
            questions: []
        };

        $scope.isTestReady = false;
        $scope.isQuestionAdded = false;

        $scope.testNameEnter = function(event){
            if (event.keyCode === 13){
                $scope.createTest();
            }
        };

        $scope.createTest = function(){
            if ($scope.f.testName != undefined){
                //set Test Name
                $scope.test.test_name = $scope.f.testName;

                // disable form
                ($scope.isTestReady == false) ? $scope.isTestReady = true : $scope.isTestReady = false;

                // store test :todo using factory?

            }

        };
        //adds a question to test
        $scope.addQuestion = function(event){
            event.preventDefault();
            $scope.test.questions.push(
                { name: $scope.q.name,
                  answers: [{value: $scope.q.radio_1,
                            answer: $scope.q.answer_1},
                            {value: $scope.q.radio_2,
                            answer: $scope.q.answer_2},
                            {value: $scope.q.radio_3,
                             answer:$scope.q.answer_3},
                            {value: $scope.q.radio_4,
                            answer: $scope.q.answer_4 }]
                            });
            //reset the form
            $scope.q = {};
            $scope.isQuestionAdded = true;
        };

        $scope.submit = function(event){
            if (event.keyCode == 13){
                addQuestion(event);
            }
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