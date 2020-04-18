// Import client startup through a single index entry point
import { Meteor } from 'meteor/meteor'

import './routes.js';

Meteor.startup(function() {
    GoogleMaps.load({v: '3', key: 'AIzaSyAUJ0lBn_uECTda2f2HFfN6s3SXcvJsNDE', libraries: 'geometry,places'});
});