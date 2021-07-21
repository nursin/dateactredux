import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return(
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-4 col-sm-2 offset-1">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li><Link className="text-white" to="/home">Home</Link></li>
                <li><Link className="text-white" to="/aboutus">About</Link></li>
                <li><Link className="text-white" to="/contactus">Contact</Link></li>
              </ul>
            </div>
            <div className="col-6 col-sm-5 text-center">
              <h5>Social</h5>
              <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>{' '}
              <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>{' '}
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>{' '}
              <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
            </div>
            <div className="col-sm-4 text-center">
              <a role="button" className="btn btn-link text-white" href="tel:+18502212689"><i className="fa fa-phone"></i>
                1-850-221-2689</a><br />
              <a role="button" className="btn btn-link text-white" href="mailto:bobbykeel76@gmail.com"><i
                  className="fa fa-envelope"></i> bobbykeel76@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;