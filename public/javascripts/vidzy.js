/**
 * Created by zezhang on 2016/10/27.
 */
var app = angular.module('Vidzy', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('HomeCtrl', ['$scope', '$resource',
    function($scope, $resource){
        var Videos = $resource('/api/videos');
        Videos.query(function(videos) {
            $scope.videos = videos
        })
    }]);