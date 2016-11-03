var myApp = angular.module('myApp', [
	'ngRoute', /** turn on deep linking **/
	'tshirtControllers',
    'tShirt'
	]);
myApp.config (['$routeProvider', function($routeProvider) {
	$routeProvider.
	when ('/list', {	/**  connecting to the starter partial page **/
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	when('/details/:itemId', {  /**  sets up the other partial page **/
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
	otherwise ({
		redirectTo: '/list'
	});
}]);
myApp.controller('LogoSelector',function(){
	this.selected = 1;
	this.selectLogo = function(logonr){
		this.selected = logonr;
	};
	this.checkSelected = function(theselected){
		return this.selected === theselected;
	};
});

(function () {
    var app = angular.module('tShirt', ['store-products']);


    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        store.products = [];
// the path has to be precise
        $http.get('js/reviews.json').success(function (data) {
            store.products = data;
        });
  }]);



    app.controller("ReviewController", function () {
        this.review = {};
        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });



})();

angular.
  bootstrap(document.getElementById("App2"), ['tShirt']);