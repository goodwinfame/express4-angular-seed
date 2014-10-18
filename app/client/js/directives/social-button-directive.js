(function () {
  'use strict';

  angular
    .module('app')
    .directive('socialButton', function () {
      return {
        restrict: 'A',
        templateUrl: 'partials/directives/social-button.html',
        scope: {
          provider: '=socialButton'
        },
        controller: function ($scope) {
          $scope.providerClass = $scope.provider.replace(" ", "-").toLowerCase();
        }
      };

    });

})();
