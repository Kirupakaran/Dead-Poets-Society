import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './css/style.css';

import SignUpForm from './components/signup';

function HeaderBar() {
  return (
    <div className="ui vertical masthead center aligned segment">
      <div className="ui container">
        <div className="ui centered grid large secondary menu">
          <h1 className="title inverted">Dead Poets Society</h1>
          <div className="right item">
            <a className="ui button">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <Container text={true} className="main-content">
      <Grid centered={true}>
        <Grid.Row>
          <Grid.Column width={10}>
            <h1 className="title">Dead Poets Society</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <h3 >A place to discuss about books. Connect with friends, discuss and share books.</h3>
            <SignUpForm />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

function Footer() {
  return (
    <div className="ui footer">
      <div className="ui centered grid container">
        Made by Kirupakaran Header
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
