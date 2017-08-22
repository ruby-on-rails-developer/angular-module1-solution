(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.msg = "";

    $scope.checkIfTooMuch = function() {
      console.log("items entered", $scope.lunchMenu);

      var lunchItems = $scope.lunchMenu.split(",");
      var numberOfItems = lunchItems.length;

      console.log("lunch items entered", lunchItems);
      console.log("number of items", numberOfItems);

      // Remove all invalid items entered using at 2 commas
      for (var i = 0, nb = 0; i < numberOfItems; i++) {
        if (lunchItems[i-nb] === "") {
          // remove entry when there is no item between some commas
          lunchItems.splice(i-nb,1);
          nb++;
        }
      }
      numberOfItems = lunchItems.length;

      console.log("lunch items entered (clean list): ", lunchItems);
      console.log("number of items (clean list): ", numberOfItems);

      if (numberOfItems === 0) { // No entry - Empty
        $scope.msg = "Please enter data first";
      } else {                   // 1 to 3 items
          if ( numberOfItems <= 3) {
            $scope.msg = "Enjoy!";
          } else {              // more than 3 items
            $scope.msg = "Too much!";
          }
      }
    };
  }

})();
