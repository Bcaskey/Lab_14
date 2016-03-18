//Logic for page actions here. 

var controllers = angular.module('myApp.controllers', []);


controllers.controller('allBlogsController', ['$scope', 'BlogEntry', function($scope, BlogEntry) {
    $scope.getAllBlogs = function() {
        BlogEntry.query().$promise.then(function(data) {
            $scope.blogs = data;
        }, console.error);
        // console.log(BlogEntry); //BlogEntry deosnt error or return blogs, tried but failed, success, data
    }
    $scope.getAllBlogs();
}]);


function loadTodos() {
  $scope.items = todoFactory.query() 
}

controllers.controller('newBlogsController', ['$scope', 'BlogEntry', function($scope, BlogEntry) {
    
    $scope.getPost = function(){
        var blogObj = {
            title: $scope.title,
            author: $scope.author,
            content: $scope.content
        }
        console.log(blogObj);
        BlogEntry.save(blogObj);        
    }
   // NOTE submit post still needs to navigate back to the main page.
}]);
