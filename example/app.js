var mercury = require('mercury');
var Icon = require('../Icon');

require('./bundle.css')

var data = {
  model: {
    iconName: 'location-arrow'
  }
}

var icon = Icon(data).state

mercury.app(document.body, icon, Icon.render)

