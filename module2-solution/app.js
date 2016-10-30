(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListService',ShoppingListCheckOffService);

   ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
        var ToBuyShoppingList=this;
        ToBuyShoppingList.Items =ShoppingListService.GetToBuyItems();
        ToBuyShoppingList.MoveItemToBoughtList=function(itemIndex){
          ShoppingListService.CheckOffItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
        var AlreadyBoughtShoppingList=this;
        AlreadyBoughtShoppingList.Items =ShoppingListService.GetAlreadyBoughtItems();
    }


    function ShoppingListCheckOffService(){
      var service=this;

      //Declare To Buy Items array
      var ToBuyItems=[
          {name : 'Cookies', quantity : '10'},
          {name : 'Croissant',quantity : '5'},
          {name : 'Doughnut',quantity : '15'},
          {name : 'Pastry',quantity :'2'},
          {name : 'Bread' ,quantity : '2'},
          {name : 'Milk', quantity : '4'},
      ];

      var AlreadyBoughtItems=[];

      service.GetToBuyItems=function(){
          return ToBuyItems;
      };

      service.GetAlreadyBoughtItems=function(){
          return AlreadyBoughtItems;
      };

      service.CheckOffItem=function(itemIndex){
      //  console.log(ToBuyItems[itemIndex]);
        AlreadyBoughtItems.push(ToBuyItems[itemIndex]);
        ToBuyItems.splice(itemIndex,1);
      }

    }
})();
