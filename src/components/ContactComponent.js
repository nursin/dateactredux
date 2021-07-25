import React, { Component } from 'react';
import { selectedContactFormValues } from '../redux/ActionCreators';
import { Card, CardHeader, CardBody, Label, Button } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    formValues: state.formValues
  }
}

const mapDispatchToProps = {
  selectedContactFormValues
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // touched: {
      //   charGender: false,
      //   charAge: false,
      //   charType: false
      // },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    // console.log("Current state is: " + JSON.stringify(values));
    // this.props.selectedCreateCharValues(values);
    // this.props.setChanged(values);

    this.props.selectedContactFormValues(values)

    alert(`Thanks ${values.firstName} ${values.lastName} for submitting phone #: ${values.phoneNum}, email: ${values.email}, and feedback: ${values.feedback}. You ${values.agree ? 'agree' : 'dont agree'} to be contacted.`)
    console.log(this.props)
  }

  render() {
    console.log(this.props)
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
            <Card className="custom-card">
              <CardHeader className="bg-gradient"><h3 className="text-white text-center mt-1" >Send us your feedback</h3></CardHeader>
              <CardBody>
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                  <div className="form-group">
                    <Label htmlFor="firstName">First Name</Label>
                    {/* eslint-disable-next-line */}
                    <Control.text className="form-control" model='.firstName' id="firstName" name="firstName" placeholder="First Name">
                    </Control.text>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="lastName">Last Name</Label>
                    {/* eslint-disable-next-line */}
                    <Control.text  className="form-control" model='.lastName' id="lastName" name="lastName" placeholder="Last Name">
                    </Control.text>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="phoneNum">Contact Tel.</Label>
                    {/* eslint-disable-next-line */}
                    <Control.text  className="form-control" model='.phoneNum' id="phoneNum" name="phoneNum" placeholder="Tel. Number">
                    </Control.text>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="email">Email</Label>
                    {/* eslint-disable-next-line */}
                    <Control.text  className="form-control" model='.email' id="email" name="email" placeholder="Email">
                    </Control.text>
                  </div>
                  <div className="form-group">
                    <Label check>
                      <Control.checkbox 
                        model=".agree"
                        name="agree"
                        className="form-check-input"
                      /> {' '}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="feedback">Your Feedback</Label>
                    {/* eslint-disable-next-line */}
                    <Control.textarea className="form-control" model='.feedback' id="feedback" name="feedback" rows="8">
                    </Control.textarea>
                  </div>
                  <Button type='submit' className="btn btn-primary bg-blue button-hover-bg-gradient col">Send Feedback</Button>
                </LocalForm>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);