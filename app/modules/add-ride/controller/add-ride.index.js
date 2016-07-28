module.exports = function (Ride, $state, toaster) {
    function getCity(place){
        return place.address_components[0].long_name;
    };

    this.addRide = function() {
        this.ride.cityFrom = getCity(this.placeFrom);
        this.ride.cityTo = getCity(this.placeTo);
        console.log(this.ride);
        Ride.save({}, this.ride, function () {
            toaster.pop('success', "Sukces!", "Dodano przejazd!");
            $state.go('addedRide');
        }, function () {
            toaster.pop('error', "Błąd!", "Wystąpił błąd serwisu!");
        });
    }
};