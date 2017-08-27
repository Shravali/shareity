(function(){
    angular
        .module("share")
        .config(configuration);
    function configuration($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home/templates/home.view.client.html",
                controller: "homeController",
                controllerAs: "model"

        })
    }
})();