//dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// action creators


// components
import Header from './HeaderComponent'
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import RenderChooseFeaturesForm from './ChooseFeaturesFormComponent';
import CreateChar from './CreateCharFormComponent';
import Profile from './ProfileReadyComponent';


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {

}

class Main extends Component {

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }

    const AboutPage = () => {
      return (
        <About />
      );
    }

    const ContactPage = () => {
      return (
        <Contact />
      );
    }

    const ChooseFeaturesFormPage = () => {
      return (
        <RenderChooseFeaturesForm />
      );
    }

    const CreateCharFormPage = () => {
      return (
        <CreateChar />
      );
    }
    
    const ProfileReadyComponentPage = () => {
      return (
        <Profile />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/home' component={HomePage} />
          <Route path='/aboutus' component={AboutPage} />
          <Route path='/contactus' component={ContactPage} />
          <Route path='/home/choosefeaturesform' component={ChooseFeaturesFormPage} />
          <Route path='/home/createchar' component={CreateCharFormPage} />
          <Route path='/home/profileready' component={ProfileReadyComponentPage} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));