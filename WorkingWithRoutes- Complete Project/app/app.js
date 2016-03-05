(function(){
	//setter method
	var app= angular.module('customersApp',['ngRoute','ngAnimate']);
    
    app.config(function($routeProvider){
       $routeProvider
          .when('/',{
           controller:'CustomersController',
           templateUrl:'app/views/customers.html'
       })
          .when('/orders/:customerId',{
           controller:'OrdersController',
           templateUrl:'app/views/orders.html'
       })
        .when('/orders',{
           controller:'AllOrdersController',
           templateUrl:'app/views/allOrders.html'
       })
       .otherwise({redirectTo:'/'});
        
        
    });
}());

