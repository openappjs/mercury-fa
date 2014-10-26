var mercury = require('mercury');
var h = mercury.h;

var screenReaderTextInlineStyle = {
  position: 'absolute',
  top: '-9999px',
  left: '-9999px'
};


function Icon (options) {
  options = options || {};
  var model = options.model || {};
  var style = options.style || {};
  var config = options.config || {};

  var state = mercury.struct({
    config: mercury.struct(config),
    model: mercury.struct(model),
    style: mercury.struct(style),
    render: mercury.value(Icon.render)
  });

  return {state: state};
};

Icon.render = function (state, events) {

  var className = 'fa fa-' + state.model.iconName;
  if (state.model.size) {
    className += ' fa-' + state.model.size;
  }
  // if (this.props.rotate) {
  //   className += ' fa-rotate-' + this.props.rotate;
  // }
  // if (this.props.flip) {
  //   className += ' fa-flip-' + this.props.flip;
  // }
  // if (this.props.fixedWidth) {
  //   className += ' fa-fw';
  // }
  // if (this.props.spin) {
  //   className += ' fa-spin';
  // }
  return h('.icon', { style: state.style.icon }, [
    h('span', {className: className}),
    h('span.screen-reader-text', {
      style: screenReaderTextInlineStyle
    }, state.model.screenReaderText )
  ]);
}

module.exports = Icon;