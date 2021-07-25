import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { generateProfile } from '../shared/functions';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { connect } from 'react-redux';

var randomFamousPerson = 1;

const mapStateToProps = state => {
  return {
    formValues: state.formValues,
    data: state.data
  }
}

class Profile extends Component {

  randomFamousPerson() {
    if (this.props.formValues.formValues.charGender === 'male') {
      randomFamousPerson = Math.floor(Math.random() * this.props.data.data.famousMales.length);
    } else if (this.props.formValues.formValues.charGender === 'female') {
      randomFamousPerson = Math.floor(Math.random() * this.props.data.data.famousFemales.length);
    } else if (this.props.formValues.formValues.charGender === 'androgen' || this.props.formValues.formValues.charGender === 'neutral') {
      randomFamousPerson = Math.floor(Math.random() * this.props.data.data.famousUnisex.length);
    } else {
      const GENDER_LIST = [this.props.data.data.famousMales, this.props.data.data.famousFemales, this.props.data.data.famousUnisex];
      randomFamousPerson = Math.floor(Math.random() * GENDER_LIST.length);
    }
  }

  render() {
    console.log('profile', this.props.formValues.formValues.charAge)
    this.randomFamousPerson();
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Profile ready</BreadcrumbItem>
            </Breadcrumb>
            <div className="card custom-card">
              <div className="card-header bg-gradient"><h2 className="text-white text-center" id="profileHeader">Character profile ready</h2></div>
              <div className="card-body col">
                <div id="name" className="col-12 text-left"><strong>Name: </strong>{generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'name', randomFamousPerson)}</div>
                <div id="age" className="col-12 mt-1 text-left"><strong>Age: </strong>{generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'age', randomFamousPerson)}</div>
                <div id="horoscope" className="col-12 mt-1 text-left"><strong>Horoscope: </strong>{generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'horoscope', randomFamousPerson)}</div>
                <div id="type" className="col-12 mt-1 text-left"><strong>Type: </strong>{generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'type', randomFamousPerson)}</div>
                <div id="bio" className="col-lg-8 mt-1 text-left"><strong>Bio: </strong>{generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'bio', randomFamousPerson)}</div>
                <div id="adjectives" className="col-12 mt-1 text-left"><strong>Adjectives: </strong>{generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'adjectives', randomFamousPerson)}</div>
                <div id="quirky-fact" className="col-8 mt-1 text-left"><strong>Quirky fact: </strong>{generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'quirkyFact', randomFamousPerson)}</div>
                <div id="profession" className="col-12 mt-1 text-left"><strong>Profession: </strong>{generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'profession', randomFamousPerson)}</div>
                <div className="btn-group mt-4 ml-2">
                  <Link className="btn btn-secondary btn-lg" to="/home">Restart</Link>
                  {/* <!-- <button id="saveProfileBtn" class="btn btn text-white bg-blue button-hover-bg-gradient">Save</button> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//restart
export default connect(mapStateToProps)(Profile);