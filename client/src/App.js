import React, { Component } from 'react';
import $ from 'jquery';
import SignUpForm from './user/signup';
import './css/materialize.css';
import 'materialize-css'
import './css/style.css';

function Header() {
  return (
    <nav className="z-depth-0" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="#" className="brand-logo brand-name">Dead Poets Society</a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-copyright">
        <div className="container center pink-text text-lighten-1">
          Made by <a className="pink-text text-lighten-5" href="http://materializecss.com">Kirupakaran</a>
        </div>
      </div>
    </footer>
  );
}

class Container extends Component {
  showSignUpModal() {
    $("#signup-modal").modal("open");
  }

  render() {
    return (
      <main>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container main-section z-deptth-5">
            <div className="card main-content">
              <h1 className="header brand-name center white-text">Dead Poets Society</h1>
              <div className="row center">
                <h5 className="header col s6 offset-s3 light white-text center-align">A place to discuss about books. Connect with friends to discuss & share books.</h5>
              </div>
              <div className="row center">
                <button onClick={this.showSignUpModal} className="btn-large waves-effect waves-light">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
        <Footer />
        <SignUpForm />
      </div>
    );
  }
}

export default App;
