//The action to call the local API should be here


var factories = angular.module('myApp.factories', []);

factories.factory('BlogEntry', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/posts/:id');//need url here
}]);

//GET http://localhost:3000/api/posts - Get an array of all blog posts
//POST http://localhost:3000/api/posts - Store the blog post. Returns the unique id of the newly stored post (standard behavior for APIs).
//GET http://localhost:3000/api/posts/[some_id] - Get the specific blog post with the given id
//PUT http://localhost:3000/api/posts/[some_id] - Update the blog post specified by the given id

