//Logic for page actions here. 

var controllers = angular.module('myApp.controllers', []);


controllers.controller('allBlogsController', ['$scope', 'BlogEntry', function($scope, BlogEntry) {
    $scope.getAllBlogs = function() {
        BlogEntry.query().$promise.then(function(data) {
            $scope.blogs = data;
            
            var success = data;
            $scope.blogs = success;
        }, console.error);
        console.log(BlogEntry);
        $scope.getAllBlogs();
    }
}]);

controllers.controller('newBlogsController', ['$scope', 'BlogEntry', function($scope, BlogEntry) {
    
    $scope.getPost = function(){
        var blogObj = {
            "title": $scope.title,
            "author": $scope.author,
            "content": $scope.content
        }
        console.log(blogObj);
        BlogEntry.save({blogObj});        
    }
   
}]);
