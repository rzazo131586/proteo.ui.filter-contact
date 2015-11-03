angular.module("proteo.ui.filter-contact", []).controller("filterContactCtrl",  function($scope, $element) {
		console.log("that is of Controller of Filter");
		
		$scope.filter={};
		$scope.validateForm = function() {
			console.log("Validate");
			console.log("Validate >> "+JSON.stringify($scope.filter));
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