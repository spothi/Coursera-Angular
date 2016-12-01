(function (){
  "use strict";

  angular.module('public')
  .controller('myInfoController',myInfoController);

  myInfoController.$inject=['signupService','ApiPath'];
  function myInfoController(signupService,ApiPath){
    var myInfoCtrl=this;

    myInfoCtrl.category=signupService.category;
    myInfoCtrl.firstname=signupService.firstname;
    myInfoCtrl.lastname=signupService.lastname;
    myInfoCtrl.email=signupService.email;
    myInfoCtrl.phone=signupService.phone;
    myInfoCtrl.address1=signupService.address1;
    myInfoCtrl.address2=signupService.address2;
    myInfoCtrl.city=signupService.city;
    myInfoCtrl.state=signupService.state;
    myInfoCtrl.zip=signupService.zip;
    myInfoCtrl.categoryInfo=signupService.categoryInfo;
    myInfoCtrl.basePath = ApiPath;
  }
})();
