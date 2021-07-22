//dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// action creators


// components
import Header from './HeaderComponent'
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
// import RenderChooseFeaturesForm from './ChooseFeaturesFormComponent';
// import CreateChar from './CreateCharFormComponent';
// import Profile from './ProfileReadyComponent';


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {

}

class Main extends Component {

  render() {
    console.log('data', this.props)

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

    // const ChooseFeaturesFormPage = () => {
    //   return (
    //     <RenderChooseFeaturesForm data={this.state} setChanged={this.setChanged}/>
    //   );
    // }

    // const CreateCharFormPage = () => {
    //   return (
    //     <CreateChar data={this.state} setChanged={this.setChanged}/>
    //   );
    // }
    
    // const ProfileReadyComponentPage = () => {
    //   return (
    //     <Profile />
    //   );
    // }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/aboutus' component={AboutPage} />
          <Route path='/contactus' component={ContactPage} />
          {/* <Route path='/choosefeaturesform' component={ChooseFeaturesFormPage} />
          <Route path='/createchar' component={CreateCharFormPage} />
          <Route path='/profileready' component={ProfileReadyComponentPage} /> */}
          <Route path='/restart' component={HomePage} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);