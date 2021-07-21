import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col text-left">
            <h2>Contact us</h2>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-lg-12">
            <div className="card custom-card">
              <div className="card-header bg-gradient"><h3 className="text-white text-center mt-1" >Send us your feedback</h3></div>

              <div className="card-body">

                <form>
                  <div className="form-group row">
                    <label htmlFor="firstName" className="col-md-2 col-form-label">First Name</label>
                    <div className="col-md-10">
                      <input className="form-control" type="text" id="firstName" name="firstName" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="lastName" className="col-md-2 col-form-label">Last Name</label>
                    <div className="col-md-10">
                      <input className="form-control" type="text" id="lastName" name="lastName" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="areaCode" className="col-md-2 col-form-label">Contact Tel.</label>
                    <div className="col-5 col-md-3">
                      <input className="form-control" type="tel" id="areaCode" name="areaCode" placeholder="Area Code" />
                    </div>
                    <div className="col-7">
                      <input className="form-control" type="tel" id="telNum" name="telNum" placeholder="Tel. Number" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="email" className="col-md-2 col-form-label">Email</label>
                    <div className="col-md-10">
                      <input className="form-control" type="email" id="email" name="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col offset-md-2">
                      May we contact you?
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="contactYes" name="contactRadios" value="yes" />
                        <label className="form-check-label" htmlFor="contactYes">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="contactNo" name="contactRadios" value="no" />
                        <label className="form-check-label" htmlFor="contactNo">No</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="feedback" className="col-md-2 col-form-label">Your Feedback</label>
                    <div className="col-md-10">
                      <textarea className="form-control" id="feedback" name="feedback" rows="8"></textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="offset-md-2 col-md-10">
                      <button className="btn btn-primary bg-blue button-hover-bg-gradient" type="button">Send Feedback</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;