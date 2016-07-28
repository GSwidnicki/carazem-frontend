module.exports = function () {
    function getCity(place){
        return place.address_components[0].long_name;
    }
};