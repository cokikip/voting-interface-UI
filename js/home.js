var app =angular.mudule('myapp', []);
app.controller('showForm', function($scope) {
    $scope.hideandshow=false;
    $scope.$watch('hideandshow', funtion(){
        $scope.buttonvalue = $scope.hideandshow ? 'Hide the form' : 'Show the div';
    })
    
});