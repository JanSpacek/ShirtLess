var tshirtControllers = angular.module('tshirtControllers', ['ngAnimate']); /**  ngAnimate is a dependency for the angular-animate.min.js **/

tshirtControllers.controller('ListController', ['$scope', '$http',  function ($scope, $http) {


 $http.get('js/data.json').success(function(data) {
 $scope.tshirts = data;
 $scope.tshirtOrder = 'name'; /** makes sure that the name option in the select box is preselected **/

 });
}]);

 tshirtControllers.controller('DetailsController', ['$scope', '$http', '$routeParams',  function($scope, $http, $routeParams) {

 $http.get('js/data.json').success(function(data) {
 $scope.tshirts = data;
 $scope.whichItem = $routeParams.itemId; /** creates a URL for the itemId in the $routeProvider config in the app.js **/

/**  JS for cycling through items in the tshirts list **/

 if($routeParams.itemId > 0) {
 	$scope.prevItem = Number($routeParams.itemId)-1;
 } else {
 	$scope.prevItem = $scope.tshirts.length-1;
 }

 if($routeParams.itemId < $scope.tshirts.length-1) {
 	$scope.nextItem = Number($routeParams.itemId)+1;
 } else {
 	$scope.nextItem = 0;
 }




 });
}]);

(function(){
  var app = angular.module('store-products', []);

  

  app.directive('shirtTabs', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/shirt-tabs.html',
      controller: function(){
        this.tab = 1;

        this.selectTab = function(selectTab) {
          this.tab = selectTab;
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs: "tab"
    };
  });

 

})();