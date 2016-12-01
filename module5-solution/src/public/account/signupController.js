(function (){

  "use strict";

  angular.module('public')
  .controller('signupController',signupController);

 signupController.$inject=['signupService']
  function signupController(signupService){
    var signupCtrl = this;
    
    signupCtrl.submit = function () {
      signupCtrl.completed = true;
      signupService.saveuserinfo(signupCtrl.user.menuNum
                                ,signupCtrl.user.firstname
                                ,signupCtrl.user.lastname
                                ,signupCtrl.user.email
                                ,signupCtrl.user.phone
                                ,signupCtrl.user.address1
                                ,signupCtrl.user.address2
                                ,signupCtrl.user.city
                                ,signupCtrl.user.state
                                ,signupCtrl.user.zip
                                )
            .then(function(response){
              signupCtrl.Message=response;
            })


    };
  }
})();
