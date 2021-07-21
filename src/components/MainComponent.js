import React, { Component } from 'react';
import { connect } from 'react-redux';
import { printHello, printBye } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
  return {
    Greeting: state.Greeting
  }
}

const mapDispatchToProps = {
  printHello, 
  printBye
}

class Main extends Component {

  render() {
    console.log('data', this.props)
    return(
      <div>
        <h2>
          {this.props.Greeting.greeting}
        </h2>
        <button className='btn btn-primary' onClick={() => this.props.printHello()}>Say Hello</button>
        <button className='btn btn-danger' onClick={() => this.props.printBye()}>Say Bye</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);