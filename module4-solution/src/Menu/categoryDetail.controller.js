(function () {
'use strict';

angular.module('MenuApp')
.controller('categoryDetailController', categoryDetailController);

// 'item' is injected through state's resolve
categoryDetailController.$inject = ['item'];
function categoryDetailController(item) {
  var categoryDetailList = this;
  categoryDetailList.item=item.data.menu_items;
  //console.log(item.data.menu_items);

}

})();
