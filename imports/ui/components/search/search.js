import {HTTP} from 'meteor/http';
import {ReactiveVar} from 'meteor/reactive-var';
import './search.html';

Template.search.events({
    'submit .location-form'(event, instance) {
        event.preventDefault();

        const target = event.target;
        const text = target.firstElementChild.value;
        console.log(text);

        getCurrentWeather(text, function (e, r) {
            console.log(r);
            instance.data.weatherResponseSet.set(r.data.response.ob);
        });
    },
    'click #show-hide-map'(event, instance) {
        event.preventDefault();
        let map = $('.map-container');
        if (map.is(":visible")) {
            map.hide(800);
        } else {
            map.show(800);
        }
    }
});

// Access Key: EXcFoaiwzFzhsPKIASKxi
// Secret Key: J0wyny2tVSQ0ev2Jp1ervmDqhUaLDkpDcGsOgYPK

function getCurrentWeather(location, callback, format = "json") {
    const url = `https://api.aerisapi.com/observations/${location}?&format=${format}&filter=allstations&limit=1&client_id=EXcFoaiwzFzhsPKIASKxi&client_secret=J0wyny2tVSQ0ev2Jp1ervmDqhUaLDkpDcGsOgYPK`;
    console.log(url);
    HTTP.get(url, callback);
}


