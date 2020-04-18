import './weather.html';

Template.weather.helpers({
    weatherResponseData() {
        return Template.instance().data.weatherResponseGet.get();
    },
    locationMapOptions: function () {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(-37.8136, 144.9631),
                zoom: 8
            };
        }
    },
});

Template.weather.onCreated(function () {
    GoogleMaps.ready('locationMap', function (map) {
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });

        google.maps.event.addListener(map.instance, 'click', function (event) {
            marker.setPosition(event.latLng);
            let locationFormInput = $('.location-form input');
            let locationForm = $('.location-form');
            locationFormInput.val(event.latLng.toString());
            locationForm.trigger(jQuery.Event('submit'));

            // Use reverse geocoding to get a nice human-readable name from the Lat/Long,
            // at the cost of added complexity
            //
            // let geocoder = new google.maps.Geocoder;
            // var locality;
            // var index = -1;
            // geocoder.geocode({location: event.latLng}, function (results, status) {
            //     if (status === 'OK') {
            //         if (results[0]) {
            //             console.log(results);
            //             results.forEach(element => {
            //                 element.types.forEach(element => {
            //                     console.log(element);
            //                     if (element === 'locality') {
            //                         locality = true;
            //                     }
            //                 });
            //                 if (locality) {
            //                     index = results.indexOf(element);
            //                     console.log(index);
            //                     locality = false;
            //                 }
            //             });
            //             if (index !== -1) {
            //                 console.log(results);
            //                 let locationForm = $('.location-form input');
            //                 locationForm.val(results[index].formatted_address);
            //                 locationForm.trigger(jQuery.Event('keypress', {keycode: 13}));
            //                 index = -1;
            //             }
            //         }
            //     }
            // });
        })
    });
});