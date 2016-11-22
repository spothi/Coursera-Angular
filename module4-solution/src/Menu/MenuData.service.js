(function(){
  'use strict';

  angular.module('MenuApp')
  .service('MenuDataService',MenuDataService)
  .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject=['$http','ApiBasePath']
  function MenuDataService($http,ApiBasePath){
    var service=this;

    var items=[];

    service.getAllCategories=function(){
          var response=$http({
            method : "GET",
            url : (ApiBasePath + "/categories.json")
          });

          return response;
    };

    service.getItemsForCategory = function (categoryshortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryshortName
      }
    });

    return response;
  };

  }
})();
