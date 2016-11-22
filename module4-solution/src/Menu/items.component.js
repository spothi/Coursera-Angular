(function(){
  angular.module('MenuApp')
  .component('categoryDetail',{
    templateUrl : 'src/Menu/templates/categoryDetailitems.template.html',
    bindings : {
      item : '<'
    }
  });
})();
