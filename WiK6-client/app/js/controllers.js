'use strict';

/* Controllers */

var wik6App = angular.module('WiK6App', []);

//wik6App.config(['$httpProvider', function($httpProvider) {
//    $httpProvider.defaults.withCredentials = true;
//    delete $httpProvider.defaults.headers.common['X-Requested-With'];
//  }
//]); 

wik6App.controller('DocListCtrl', function ($scope, $http) {
  $http.get('http://localhost:3000/').success(function(data, status, headers, config) {
    console.log('Status: ', status);
    console.log('Data: ', data);
	$scope.docs = data.docs;
  }).error(function(data, status, headers, config) {
    console.log('Status: ', status);
    console.log('Data: ', data || 'Request failed');
  });

});