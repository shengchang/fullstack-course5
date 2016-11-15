(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', function ($scope) {
    $scope.result="";
    $scope.lunch_menu="";

    $scope.check_menu = function(){
      var menu_list = $scope.lunch_menu.split(",").filter(function(el) {return el.trim().length != 0});
      var num_of_items = menu_list.length;
      console.log("number of items:"+num_of_items);

      if (num_of_items > 3) {
        $scope.result="Too much!";
        $scope.text_color={color: "green"};
        $scope.border_color = {"border-color": "green"};
      }
      else if (num_of_items<=3 && num_of_items> 0) {
        $scope.result="Enjoy!";
        $scope.text_color={color: "green"};
        $scope.border_color = {"border-color": "green"};
      }
      else {
        $scope.result="Please enter data first";
        $scope.text_color={color: "red"};
        $scope.border_color = {"border-color": "red"};
      }
      console.log(menu_list);
    };
  });
})();