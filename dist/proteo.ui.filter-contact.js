require('./dist/proteo.ui.filter-contact-directive');
module.exports = 'proteo.ui.filter';
/*angular.module("proteo.ui.filter-contact", []).controller("filterContactCtrl",  function($scope) {

		console.log("that is of Controller of Filter");
		$scope.filter={};

});*/

angular.module.directive("filterContact", function() {

	console.log("that is of Directive Filter");
	return {
		//restrict: "AE",
		scope: {
			userCallBack_ : "="
		},
		controller : 'filterContactCtrl',
		templateUrl: './bower_components/proteo.ui.filter-contact/src/proteo.ui.filter-contact.tpl.html',
		link: function($scope){
			$scope.somethingHappend = function(){
	       		$scope.userCallBack_($scope.filter);
	 		}
		}
	}

});
angular.module("proteo.ui.filter-contact", []).filter('searchContact-filter', function(){

}){;
angular.module("proteo.ui.filter-contact", []).controller("filterContactCtrl",  function($scope) {

		console.log("that is of Controller of Filter");
		$scope.filter={};

});