import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Label, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { selectedCreateCharValues } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    formValues: state.formValues,
    createFormValues: state.createFormValues
  }
}

const mapDispatchToProps = {
  selectedCreateCharValues
};

class CreateChar extends Component {
  constructor(props) {
    super(props);
    // sets change/page to false so charform will load after instructions page

    this.state = {
      changePage: false
      // touched: {
      //   charGender: false,
      //   charAge: false,
      //   charType: false
      // },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToProfile = this.redirectToProfile.bind(this);

  }

  handleSubmit(values) {
    // console.log("Current state is: " + JSON.stringify(values));
    this.setState({
      changePage: true
    })
    this.props.selectedCreateCharValues(values);
    // this.props.setChanged(values);


    // console.log("Gender:", values.charGender)
    // console.log("Age:", values.charAge) 
    // console.log("Type:", values.charType) 
  }

  redirectToProfile() {
    // console.log(changePage)
    if (this.state.changePage) {
      this.setState({
        changePage: false
      })
      // this.props.data.profile.type = 'createYourOwn'
      // this.props.data.formValues.charType = 'createYourOwn'
      return <Redirect to='/home/profileready' />
    }
  }

  render() {
    console.log("Data", this.props)
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Create you character</BreadcrumbItem>
            </Breadcrumb>
            <Card className="custom-card">
              <CardHeader className="bg-gradient"><h2 className="text-white text-center">Create your character</h2></CardHeader>
              <CardBody>
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                  <div className="form-group">
                    <Label htmlFor="createName">Name</Label>
                    {/* eslint-disable-next-line */}
                    <Control.text id="createName" model=".createName" className="form-control" name="createName">
                    </Control.text>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="createAge">Age</Label>
                    {/* eslint-disable-next-line */}
                    <Control.text id="createAge" model=".createAge" className="form-control" name="createAge">
                    </Control.text>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="createHoroscope">Horoscope</Label>
                    {/* eslint-disable-next-line */}
                    <Control.text id="createHoroscope" model=".createHoroscope" className="form-control" name="createHoroscope" >
                    </Control.text>
                  </div>
                  <div className="form-group">
                    <Label className="col-lg-3" htmlFor="createBio">Bio</Label>
                    {/* eslint-disable-next-line */}
                    <Control.textarea id="createBio" model=".createBio" className="form-control" name="createBio" rows="5">
                    </Control.textarea>
                  </div>
                  <div className="form-group">
                    <Label className="col-lg-3" htmlFor="createAdjectives">Adjectives</Label>
                    {/* eslint-disable-next-line */}
                    <Control.text id="createAdjectives" model=".createAdjectives" className="form-control" name="createAdjectives">
                    </Control.text>
                  </div>
                  <div className="form-group">
                    <Label className="col-lg-3" htmlFor="createQuirkyFact">Quirky Fact</Label>
                    {/* eslint-disable-next-line */}
                    <Control.text id="createQuirkyFact" model=".createQuirkyFact" className="form-control" name="createQuirkyFact">
                    </Control.text>
                  </div>
                  <div className="form-group">
                    <Label className="col-lg-3" htmlFor="createProfession">Profession</Label>
                    {/* eslint-disable-next-line */}
                    <Control.text id="createProfession" model=".createProfession" className="form-control" name="createProfession">
                    </Control.text>
                  </div>
                  <div className="form-group mt-4">
                    <div className="col btn-group">
                      <Button type="submit" className="btn btn-lg text-white bg-blue button-hover-bg-gradient"><i className="fa fa-transgender-alt fa-lg"></i> Create</Button>
                      <Link to='/home/choosefeaturesform' role="button" className="btn btn-secondary btn-lg">Back</Link>
                    </div>
                  </div>
                </LocalForm>
              </CardBody>
            </Card>
            {this.redirectToProfile()}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateChar);