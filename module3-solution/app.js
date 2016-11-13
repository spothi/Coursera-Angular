(function(){
  'use strict';
  angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com")
    .directive('foundItems',foundItemsDirective);

    function foundItemsDirective(){
      var ddo = {
        templateUrl : 'foundItems.html',
        scope : {
          items : '<',
          onRemove : '&'
        },
        controller : NarrowItDownDirectiveController,
        controllerAs : 'list',
        bindToController : true
      };
      return ddo;
    }
    function NarrowItDownDirectiveController(){
      var list=this;
      list.ItemsInList=function(){
        if (list.items == undefined){
          return false;
        } else {
          if (list.items.length ==0) {
             return true;
           }
        }

          return false;
      };
    }
    NarrowItDownController.$inject=['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var list=this;

        list.getItems=function(searchTerm){
          var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
          promise.then(function(response){
            //console.log(response);
            list.found=response;
          })
          .catch(function(error){
             console.log("error")
          })

        };

        list.removeItem = function (itemIndex) {
             list.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject=['$http','ApiBasePath'];
    function MenuSearchService($http,ApiBasePath){
          var service=this;
          service.getMatchedMenuItems=function(searchTerm){
             var response = $http({
               method : "GET",
               url : (ApiBasePath + "/menu_items.json")
             });

            // return response;
             return response.then(function(response){
               var menuitems=response.data.menu_items;
                var foundItems=[];
                //console.log(searchTerm);
                if (searchTerm !== ""){
                  for (var k in menuitems){
                    var desc=menuitems[k].description;

                    if (desc.toLowerCase().indexOf(searchTerm) !== -1){
                      foundItems.push(menuitems[k]);
                    //  console.log(desc);
                    }
                  }
                }

                return foundItems;
             });
          };
    }
})();
