var controllers = angular.module('myApp.controllers', []);

controllers.controller('allBlogsController', ['$scope', 'BlogEntry', "$location", function($scope, BlogEntry, $location) {
    $scope.getAllBlogs = function() {
        BlogEntry.query().$promise.then(function(data) {
            $scope.blogs = data;
        }, console.error);
    }
    $scope.getAllBlogs();
    $scope.getPostId = function(){
        // var getCurrentId = $scope.getId
        var getCurrentId = $scope.blogs.id
        // console.log(getCurrentId);
    }
    // $scope.newPostPage() = function(){
    //     $window.location = "/newpost.html";
    // };
    
    $scope.newPostPage = function() {
        $location.path("/newpost");
      };
    
}]);

controllers.controller('singBlogsController', ['$scope', 'BlogEntry', '$routeParams', function($scope, BlogEntry, $routeParams) {
    $scope.getSingBlogs = function() {
        var postId = $routeParams.id;
        
        BlogEntry.get({id: postId}).$promise.then(function(data) {
            $scope.blog = data;
        })
        // $scope.blog = BlogEntry[blog_id];
    }
    $scope.getSingBlogs();
    
}]);


      

controllers.controller('newBlogsController', ['$scope', 'BlogEntry', '$location', function($scope, BlogEntry, $location) {
    $scope.makePost = function(){
        var blogObj = {
            title: $scope.title,
            author: $scope.author,
            content: $scope.content
        }
        BlogEntry.save(blogObj);
        $location.path("/blogposts");
    }
   // NOTE submit post still needs to navigate back to the main page.
}]);



  
