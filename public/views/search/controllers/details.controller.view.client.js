(function () {
    angular
        .module("share")
        .controller("detailsController", detailsController);
    function detailsController($routeParams, searchService){
        var model = this;
        model.ein = $routeParams.ein;

        function init(){
            searchService
                .searchCharityById(model.ein)
                .then(renderCharity);
        }
        init();

        function renderCharity(charity){
            model.charity = charity;
        }

    }
})();