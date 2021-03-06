var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


Parse.initialize("6Y1thpza6ZmfUKLG8HAV2gAMciWfORn3Eh0YRmIE", "EwL2wkstnoAn8oaipAl2bDTDmGLWlum7u1Tfp0po");
APP = require('./components/app').APP;
// Dashboard = require('./components/app').Dashboard;


var Logout = require('./components/auth/app-logout');
var Login = require('./components/auth/app-login');

var About = require('./components/about/app-about');
var Dashboard = require('./components/dashboard/app-dashboard');


var routes = (
  <Route handler={APP}>
    <Route name="login" handler={Login}/>
    <Route name="logout" handler={Logout}/>
    <Route name="about" handler={About}/>
    <Route name="dashboard" handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('example'));
});
