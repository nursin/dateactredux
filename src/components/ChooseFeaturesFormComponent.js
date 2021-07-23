import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Label, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Control, LocalForm} from 'react-redux-form';
import { selectedChooseFormValues } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    formValues: state.formValues
  }
}

const mapDispatchToProps = {
  selectedChooseFormValues
};

class RenderChooseFeaturesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changePage: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToProfile = this.redirectToProfile.bind(this);

  }

  handleSubmit (values) {
    console.log("Current state is: " + JSON.stringify(values));
    console.log("Gender:", values.charGender)
    console.log("Age:", values.charAge) 
    console.log("Type:", values.charType)
    this.setState({
      changePage: true
    })
    this.props.selectedChooseFormValues(values)
    console.log('after change',this)
  }

  redirectToProfile() {
    // console.log(this.props.data.formValues.charType)
    if (this.state.changePage && this.props.formValues.formValues.charType === 'createYourOwn') {
      console.log('hi')
      this.setState({
        changePage: false
      })
      return <Redirect to='/home/createchar' />
    } else if (this.state.changePage){
      console.log('ho')
      this.setState({
        changePage: false
      })
      return <Redirect to='/home/profileready' />
    }
  }

  render() {
    console.log(this)
    return (
      <div className='container'>
        <div className='row row-content'>
          <div className='col-12'>
            <Card className='custom-card'>
              <CardHeader className='bg-gradient' >
                <h2 className='text-white text-center'>Choose character features</h2>
              </CardHeader>
              <CardBody>
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                  <div className='form-group'>
                    <Label htmlFor='charGender'>Gender</Label>
                      {/* eslint-disable-next-line */}
                      <Control.select id='charGender' model='.charGender' className='form-control' name='charGender'>
                        <option default>Select...</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='androgen'>Androgyne</option>
                        <option value='neutral'>Gender Nonconforming</option>
                      </Control.select>
                  </div>
                  <div className='form-group'>
                    <Label htmlFor='charAge'>Age range</Label>
                    {/* eslint-disable-next-line */}
                      <Control.select id='charAge' model='.charAge' className='form-control' name='charAge'>
                        <option default>Select...</option>
                        <option value='10-19'>10 - 19</option>
                        <option value='20-29'>20 - 29</option>
                        <option value='30-39'>30 - 39</option>
                        <option value='40-49'>40 - 49</option>
                        <option value='50-59'>50 - 59</option>
                        <option value='59+'>59+</option>
                      </Control.select>
                  </div>
                  <div className='form-group'>
                    <Label htmlFor='charType'>Type</Label>
                    {/* eslint-disable-next-line */}
                      <Control.select id='charType' model='.charType' className='form-control' name='charType'>
                        <option default>Select...</option>
                        <option value='famous'>Famous</option>
                        <option value='notFamous'>Not famous</option>
                        <option value='createYourOwn'>Create your own</option>
                      </Control.select>
                  </div>
                  <div className='form-group mt-4'>
                      <Button type='submit' className='col btn btn-lg text-white bg-blue button-hover-bg-gradient'>
                        <i className='fa fa-transgender-alt fa-lg' /> Generate
                      </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RenderChooseFeaturesForm);