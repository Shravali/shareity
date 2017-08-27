(function () {
    angular
        .module("share")
        .controller("homeController", homeController);
    function homeController(homeService){
        var model = this;
        model.searchByCharityName = searchByCharityName;

        function searchByCharityName(charityName){
            homeService.searchByCharityName(charityName);

        }
    }
})();