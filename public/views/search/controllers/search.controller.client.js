(function () {
    angular
        .module("share")
        .controller("searchController", searchController);
    function searchController(searchService){
        var model = this;
        model.searchByCharityName = searchByCharityName;

        function searchByCharityName(charityName){
            searchService
                .searchByCharityName(charityName)
                .then(renderCharities);

        }

        function renderCharities(charities){
            model.charities = charities;
        }



    }
})();