(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];

  function RoutesConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
       url : '/',
       templateUrl:'src/Menu/templates/home.template.html'
    })
    .state('categoriesList',{
      url : '/Categories',
      templateUrl: 'src/Menu/templates/categoriesList.template.html',
      controller : 'CategoriesListController as CategoriesList',
      resolve : {
        items : ['MenuDataService',function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('categoryDetail', {
    url: '/items/{shortName}',
    //url: '/items/',
    templateUrl: 'src/Menu/templates/category-detail.template.html',
    controller: 'categoryDetailController as categoryDetailList',
    resolve: {
      item: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.shortName);
                // .then(function (items) {
                //   return items[$stateParams.shortName];
                // });
            }]
    }
  });
  };
})();
