angular.module("proteo.ui.filter-contact", []).controller("filterContactCtrl",  function($scope) {

		console.log("that is of Controller of Filter");
		$scope.filter={};

})
.directive("filterContact", function() {

	console.log("that is of Directive Filter");
	return {
		//restrict: "AE",
		scope: {
			returnFilter : "=filter-callback"
		},
		controller : 'filterContactCtrl',
		templateUrl: './bower_components/proteo.ui.filter-contact/src/proteo.ui.filter-contact.tpl.html',
		link: function($scope){
			$scope.somethingHappend = function(){
	       		$scope.returnFilter($scope.filter);
	 		}
		}
	}

});