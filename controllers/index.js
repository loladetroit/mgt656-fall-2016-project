'use strict';

var events = require('../models/events');

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var now = new Date();
  var contextData = {
    'title': 'Major Key Events',
    'tagline': 'Where all the Keys are Major and the Numerous Logistical Inconveniences Minor.',
    'events': []
};
  for(var i=0; i < events.all.length; i++){
    var event = events.all[i];
    if(event.date > now){
      contextData.events.push(event);
    }
  }
  
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
