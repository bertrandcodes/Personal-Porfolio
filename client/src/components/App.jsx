import React, { Fragment } from 'react';
import Navbar from './Navbar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Applications from './Applications.jsx';
import Blog from './Blog.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/applications" component={Applications} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  };
};