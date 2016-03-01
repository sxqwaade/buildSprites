var app = angular.module('fileUpload',['ngFileUpload']);

app.controller('MyCtrl',['$scope','Upload','$timeout','$http',function($scope,Upload,$timeout,$http){
    $scope.imagesName = [];
    $scope.uploadFiles = function(files,errFiles){
        $scope.files = files;
        $scope.errFiles = errFiles;   
        $scope.uploadTime = new Date().getTime();     
        angular.forEach(files,function(file){
            file.upload = Upload.upload({
                url:'http://192.168.9.3:3030/api/user/uploads',
                data:{file:file,time:$scope.uploadTime}
            });

            file.upload.then(function(response){
                $timeout(function(){
                   file.result = response.data;     
                });
                $scope.imagesName.push(file.name);
            },function(response){
                if(response.status > 0){
                   $scope.errorMsg = response.status + ':' +response.data;     
                }    
            },function(evt){
                file.progress = Math.min(100,parseInt(100.0*evt.loaded/evt.total));    
            });
        });
    };

    $scope.getSprite = function(){
        $http.get('http://192.168.9.3:3030/api/user/getSprite?sprites='+$scope.imagesName.join(';')+'&time='+$scope.uploadTime).success(function(data){
            var res = eval(data);
            console.log(res)
            $scope.spriteImgSrc = res.imgSrc;
            $scope.spriteCssSrc = res.cssSrc;
        });
    }
}]);