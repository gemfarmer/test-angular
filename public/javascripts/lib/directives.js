'use strict';

/* Directives */

angular.module('testAngular.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });