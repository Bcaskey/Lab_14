var controllers = angular.module('myApp.controllers', []);

controllers.controller('allBlogsController', ['$scope', 'BlogEntry', function($scope, BlogEntry) {
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
    
}]);

controllers.controller('singBlogsController', ['$scope', 'BlogEntry', '$routeParams', function($scope, BlogEntry, $routeParams) {
    $scope.getSingBlogs = function() {
        var postId = $routeParams.id;
        // console.log(id);
        // console.log(BlogEntry + id)
        
        BlogEntry.get({id: postId}).$promise.then(function(data) {
            $scope.blog = data;
        })
        // $scope.blog = BlogEntry[blog_id];
    }
    $scope.getSingBlogs();
    
    
}]);



    //   var note = Notes.get({ id:$routeParams.id });
    //   note.text = ‘Some new note text’;
    //   Notes.update({ id:note.id }, note);
      
      

controllers.controller('newBlogsController', ['$scope', 'BlogEntry', function($scope, BlogEntry) {
    $scope.makePost = function(){
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



  
