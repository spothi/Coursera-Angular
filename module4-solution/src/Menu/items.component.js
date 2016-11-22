(function(){
  angular.module('MenuApp')
  .component('categoryDetail',{
    templateUrl : 'src/Menu/templates/categoryDetailItems.template.html',
    bindings : {
      item : '<'
    }
  });
})();
