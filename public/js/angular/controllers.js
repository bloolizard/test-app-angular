angular.module('testMakerApp.controllers',[])
.controller('HomeViewController', function($scope, communicateScope){
    communicateScope.title = 'HOME';
})
.controller('NewTestViewController', function($scope, $http, $location, communicateScope){
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
                  answers: [{answer: $scope.q.answer_1},
                            {answer: $scope.q.answer_2},
                            {answer:$scope.q.answer_3},
                            {answer: $scope.q.answer_4 }],
                  correct: $scope.q.radio
                            });
            //reset the form
            $scope.q = {};
            $scope.isQuestionAdded = true;
            console.log($scope.test);
        };

        $scope.submit = function(event){
            if (event.keyCode == 13){
                addQuestion(event);
            }
        };

        $scope.finishedTest = function(event){
            event.preventDefault();

            // send a POST request to server containing test
            $http.post('/tests',$scope.test).success(function(data){
                console.log('Success');
                console.log(data);
                $location.path('/thank_you');

            })
            .error(function(){
                console.log('wahh error');
             });


        }
})
.controller('MyTestsViewController', function($scope, $http, communicateScope){
        communicateScope.title = 'MY TESTS';
        // get tests from server
        $http.get('/tests').success(function(data){
            $scope.tests = data;
            console.log($scope.data);
        })
        .error(function(){
            // Sorry there was an error
        });

        $scope.openTest = function(test_id, event) {
            event.preventDefault();
            console.log(test_id);
        };

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
})
.controller('SingleTestViewController', function($scope, $http, $routeParams){
    $scope.radio = {};

    $http.get('/tests/'+$routeParams.test_id).success(function(data){
        $scope.test = data[0];

        $scope.answers = $scope.test.questions.map(function(elem){
            return elem.correct;
        });
    });


    $scope.gradeTest = function(){
        console.log($scope.answers);
        console.log($scope.radio);
        var correct = 0;
        total = $scope.answers.length;
        for (i in $scope.answers){
            if($scope.answers[i] == $scope.radio[i]){
                correct += 1;
            }
            else {
//                The answer is incorrect.
//                console.log('incorrect');
            }
        }
//        todo: make a new view for alert.
        alert('You scored ' + (correct/total * 100) + '%' );
    };
    $scope.$watch('r_', function(){
        console.log($scope.$r);
    });


})
.controller('ThankYouViewController', function($scope){

});