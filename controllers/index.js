'use strict';

var events = require('../models/events');

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
    'title': 'Dauting-Sierra Events',
    'tagline': 'Major Key, Many Minor Logistical Inconveniences.',
    events: events.all
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
