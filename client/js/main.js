//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myApp', ['myApp.controllers', 'myApp.factories', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/blogposts.html',
        controller: 'allBlogsController'
    })
    .when('/newpost', {
        templateUrl: 'views/newpost.html',
        controller: 'allBlogsController'
    })
    // .when('/instructors/:id', {
    //     templateUrl: 'views/instructor_detail.html',
    //     controller: 'InstructorDetailController'
    // })
    .otherwise({
        redirectTo: '/'
    });
}]);
