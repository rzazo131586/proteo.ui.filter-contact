angular.module("proteo.ui.filter", []).controller("filterContactCtrl",  function($scope) {
		console.log("that is of Controller");
		
		$scope.filter={};

}).directive("filterContact", function() {
	console.log("that is of Directive Filter");

	return {
		restrict: "AE",
		controller : 'filterContactCtrl',
		templateUrl: './bower_components/proteo.ui.filter-contact/src/proteo.ui.filter-contact.tpl.html'
	};
});
angular.module("proteo.ui.search-person", []).filter('searchContact-filter', function(){

}){;
angular.module("proteo.ui.search-person", []){

});