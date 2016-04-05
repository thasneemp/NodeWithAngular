/**
 * Created by thasneem on 5/4/16.
 */
var app = angular.module('MyApp', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'VideoCtrl'
        }).when('/add-video', {
        templateUrl: 'partials/video_form.html',
        controller: 'AddVideoCtrl'
    }).otherwise({
        redirectTo: '/'
    });
}]);


app.controller('VideoCtrl', ['$scope', '$resource',
    function ($scope, $resource) {
        var Videos = $resource('/video/')
        Videos.query(function (videos) {
            $scope.videos = videos;
        });
    }]);


app.controller('AddVideoCtrl', ['$scope', '$resource', '$location',
    function ($scope, $resource, $location) {
        $scope.save = function () {
            var videos = $resource('/video/');
            videos.save($scope.video, function () {
                $location.path('/');
            });
        };
    }]);