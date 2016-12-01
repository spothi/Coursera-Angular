(function () {
"use strict";

angular.module('public')
.service('signupService', signupService);


signupService.$inject = ['$http', 'ApiPath','$q'];
function signupService($http, ApiPath,$q) {
  var service = this;
  service.saveuserinfo = function (category,firstname,lastname,email,phone,address1,address2,city,state,zip) {

 var message="";
 var categoryInfo={};
    return $http.get(ApiPath + '/menu_items/'+ category +'.json')
    .then(function (response) {
      service.category=category;
      service.firstname=firstname;
      service.lastname=lastname;
      service.email=email;
      service.phone=phone;
      service.address1=address1;
      service.address2=address2;
      service.city=city;
      service.state=state;
      service.zip=zip;
      service.categoryInfo=response.data;

      message="Your information has been saved";
      categoryInfo=response.data;

      //console.log(response.data);
      //return response.data;
      return message;
    },function (response){
      service.firstname="";
      service.lastname="";
      service.email="";
      service.phone="";
      service.address1="";
      service.address2="";
      service.city="";
      service.state="";
      service.zip="";
        message="No such Menu number exists";
      //console.log(response.status);
      //return response.status;
      return message;
    })
  };

}



})();
