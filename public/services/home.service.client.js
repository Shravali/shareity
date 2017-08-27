(function() {
    angular
        .module("share")
        .factory("homeService", homeService);
    function homeService($http){
        return {
            "searchByCharityName": searchByCharityName
        };

        function searchByCharityName(charityName) {
            var url="http://data.orghunter.com/v1/charitysearch?user_key=&searchTerm="+charityName;
            return $http.get(url)
                .then(console.log("searching"));
        }
    }
})();