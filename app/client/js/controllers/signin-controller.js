(function () {
  'use strict';

  angular
    .module('app')
    .controller('SigninController', function ($scope, $modalInstance) {

      $scope.providers = [
        "Twitter"
      ];

      $scope.close = function () {
        $modalInstance.close();
      };

    });

})();
