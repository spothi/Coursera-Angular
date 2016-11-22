(function(){
  angular.module('MenuApp')
  .component('categoryItems',{
    templateUrl : 'src/Menu/templates/categoriesListItems.template.html',
    bindings : {
      items : '<'
    }
  });
})();
