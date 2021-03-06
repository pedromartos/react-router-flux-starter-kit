/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var AuthStore = require('../../stores/app-auth.js');
var FbOauthActions = require('../../actions/app-fboauth');

var EntityStore = require('../../stores/app-entity');



var FbLoginButton = React.createClass({
  mixins: [ Router.Navigation ],

  statics: {
    attemptedTransition: null
  },

  getInitialState: function () {
    return {
      error: false
    };
  },
  handleFBLogin: function (event) {
    FbOauthActions.startOauth("test");
  },
  render: function () {
    return (
          <button type="submit" onClick={this.handleFBLogin}>FB login</button>
    );
  }
});

module.exports = FbLoginButton;

