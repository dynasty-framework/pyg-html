//登录页面服务层代码
app.service('LoginService', function ($http) {

    //登录接口
    this.login = function() {
        return $http.post();
    }

});