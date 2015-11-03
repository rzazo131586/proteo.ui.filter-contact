require('./dist/proteo.ui.filter-contact-directive');
module.exports = 'proteo.ui.filter';
angular.module("proteo.ui.filter-contact", []).controller("filterContactCtrl",  function($scope, $element) {
		console.log("that is of Controller of Filter");
		
		$scope.filter={};
		$scope.userCallback = function(){
			console.log("$scope.filter Called");
			console.log("$scope.filter > "+$scope.filter);
		}

}).directive("filterContact", function() {
	console.log("that is of Directive Filter");

	return {
		restrict: "AE",
		scope 	: {
			"userCallback" : "="
		}
		controller : 'filterContactCtrl',
		templateUrl: './bower_components/proteo.ui.filter-contact/src/proteo.ui.filter-contact.tpl.html'
	};
});
angular.module("proteo.ui.filter-contact", []).filter('searchContact-filter', function(){

}){;
angular.module("proteo.ui.filter-contact", []){

});