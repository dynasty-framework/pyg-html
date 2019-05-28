//登录页面controller层代码
app.controller('LoginController', function($scope, $http, LoginService) {

    $scope.username = '';

    $scope.password = '';

    $scope.login = function () {
        console.log($scope.username);
        console.log($scope.password);


       /* LoginService.login().success(
            function (response) {

            }
        );*/
    }

});