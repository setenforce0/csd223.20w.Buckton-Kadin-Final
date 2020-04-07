import './home.html';

import '../../components/search/search.js';
import '../../components/weather/weather.js';

let weatherResponse = new ReactiveVar();

Template.App_home.helpers({
    weatherResponseVar: function() {
        return weatherResponse;
    }
});
