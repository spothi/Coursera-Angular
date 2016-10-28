(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope) {
      $scope.items='';
      $scope.message='';
      $scope.FontColor='Black';
      $scope.InputBorderColor='Black';
      //Function that assigns message based on count
      $scope.CheckifTooMuch=function(){
        var count=GetCountOfItems($scope.items);
        if (count==0) {
          $scope.message = 'Please enter data first';
          $scope.FontColor='Red';
        }
        else if (count <= 3 & count > 0) {
          $scope.message = 'Enjoy!';
          $scope.FontColor='Green';
        }
        else {
          $scope.message = 'Too much';
          $scope.FontColor='Green';
        }
        $scope.InputBorderColor=$scope.FontColor;
      }
     //Function to get count of comma seperated items
      function GetCountOfItems(ItemsString) {
        var totalcount=0;
        if (ItemsString!=''){
          var items=ItemsString.split(',');
          for(var i=0;i<items.length;i++){
            if (items[i]!=''){
              totalcount=totalcount+1;
            }
          }
          //totalcount=items.length;
          //console.log(totalcount);
        }
        return totalcount;
      }
  }
})();
