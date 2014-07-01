angular.module('material.components.form', [])

.directive('materialInputGroup', [materialInputGroupDirective]);

function materialInputGroupDirective() {
  return {
    restrict: 'C',
    link: function($scope, $element, $attr) {
      // Grab the input child, and just do nothing if there is no child
      var input = $element[0].querySelector('input');
      if(!input) { return; }

      input = angular.element(input);
      // When the input focuses, add the focused class to the group
      input.on('focus', function(e) {
        $element.addClass('material-input-focused');
      });
      // When the input blurs, remove the focused class from the group
      input.on('blur', function(e) {
        $element.removeClass('material-input-focused');
      });

      // When the input value changes, check if it "has" a value, and 
      // set the appropriate class on the input group
      input.on('keyup change', function(e) {
        if(input.val()) {
          $element.addClass('material-input-has-value');
        } else {
          $element.removeClass('material-input-has-value');
        }
      });
    }
  }
}