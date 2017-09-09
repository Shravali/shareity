(function() {
    angular
        .module("share")
        .factory("searchService", searchService);
    function searchService($http){
        return {
            "searchByCharityName": searchByCharityName,
            "searchCharityById" : searchCharityById

    };

        function searchByCharityName(charityName) {
            var url="https://api.data.charitynavigator.org/v2/Organizations?app_id=a4336653&app_key=6e0e0854264a55a46df66c7f7bf5e5aa&search="+charityName;
            return $http.get(url)
                .then(console.log("searching"))
                .then(function(response) {
                   return response.data;
                });
        }

        function searchCharityById(id){
            var url="http://data.orghunter.com/v1/charitybasic?user_key=35887bed91015b12bdfb52d38432e6d2&ein=" + id;
            return $http.get(url)
                .then(console.log("searching"))
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();