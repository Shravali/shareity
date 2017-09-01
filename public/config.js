(function () {
    angular
        .module("share")
        .config(configuration);
    function configuration($routeProvider) {
        $routeProvider
            .when("/search", {
                templateUrl: "views/search/templates/search.view.client.html",
                controller: "searchController",
                controllerAs: "model"

            })
            .when("/details/:ein", {
                templateUrl: "views/search/templates/details.view.client.html",
                controller: "detailsController",
                controllerAs: "model"
            })


    }
})();