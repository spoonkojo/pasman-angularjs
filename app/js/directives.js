'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('year', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        year: "=?"
      },
      template: '<em>{{year}}</em>',
      link: function (scope) {
        if (scope.year === undefined) {
          var today;
          today = new Date();
          scope.year = today.getFullYear();
        }
      }
    };
  }).
  directive('pbcopy', function() {
    return {
      restrict: 'A',
      transclude: true,
      template: '<i class="fa fa-copy"></i> <span ng-transclude></span>',
      link: function(scope, element, attrs) {
        var client;

        client = new ZeroClipboard(element);

        client.on('copy', function(event) {
          var clipboard;

          clipboard = event.clipboardData;
          clipboard.setData('text/plain', attrs.pbcopy);
          $(element).fadeTo('fast', 0.5).fadeTo('fast', 1);
        });

        client.on('aftercopy', function(event) {
          toastr.success('<em>' + event.data['text/plain'] + '</em> copied!');
        });
      }
    }
  });
