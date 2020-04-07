import './weather.html';

Template.weather.helpers({
    weatherResponseData() {
        return Template.instance().data.weatherResponseGet.get();
    },
});