(function () {
  'use strict';

  angular
    .module('app')
    .controller('IndexController', function ($scope, $http, $modal) {

      $http.get("/me").success(function (data) {
        $scope.profile = data;
      });

      $scope.signin = function () {
        $modal.open({
          templateUrl: 'partials/modals/signin.html',
          controller: 'SigninController',
          size: 'sm'
        });
      };

    });

})();
