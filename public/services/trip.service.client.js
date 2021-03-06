(function() {
    angular
        .module("TravelApp")
        .factory("TripService", TripService);

    function TripService($http) {

        var api = {
            "createTrip": createTrip,
            "createTripFromPlan": createTripFromPlan,
            "updateTrip": updateTrip,
            "deleteTrip": deleteTrip,
            "findTripByUserId": findTripByUserId,
            "findTripById": findTripById,
            "findTripsByCountry": findTripsByCountry,
            "findAllTrips": findAllTrips
        }
        return api;

        // adds the trip parameter instance to the local trips array. The new trip's userId is set to the userId parameter
        function createTrip(userId, trip) {
            return $http.post("/api/user/"+userId+"/trip?blank=true", trip)
                .then(function (response) {
                    return response.data;
                });
        }

        function createTripFromPlan(userId, planId) {
            return $http.post("/api/user/"+userId+"/trip", planId)
                .then(function (response) {
                    return response.data;
                });
        }

        // retrieves the trips in local trips array whose userId matches the parameter userId
        function findTripByUserId(userId) {
            return $http.get("/api/user/"+userId+"/trip")
                .then(function (response) {
                    return response.data;
                });
        }
        
        // retrieves the trip in local trips array whose _id matches the tripId parameter
        function findTripById(tripId) {
            return $http.get("/api/trip/"+tripId)
                .then(function (response) {
                    return response.data;
                });
        }

        // retrieves all the trips with the selected countries
        function findTripsByCountry(queryStr) {
            return $http.get("/api/search?q="+queryStr)
                .then(function (response) {
                    return response.data;
                }, function(err) {
                });
        }

        function findAllTrips() {
            return $http.get("/api/all")
                .then(function(response) {
                    return response.data;
                });
        }

        
        // updates the trip in local trips array whose _id matches the tripId parameter
        function updateTrip(tripId, newtrip) {
            return $http.put("/api/trip/"+tripId, newtrip)
                .then(function (response) {
                    return response.data;
                });
        }

        // removes the trip from local trips array whose _id matches the tripId parameter
        function deleteTrip(tripId) {
            return $http.delete("/api/trip/"+tripId)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();