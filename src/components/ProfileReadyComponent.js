import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { generateProfile } from '../shared/functions';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
var randomFamousPerson = 1;
class Profile extends Component {

  randomFamousPerson() {
    if (this.props.data.formValues.charGender === 'male') {
      randomFamousPerson = Math.floor(Math.random() * this.props.data.famousMales.length);
    } else if (this.props.data.formValues.charGender === 'female') {
      randomFamousPerson = Math.floor(Math.random() * this.props.data.famousFemales.length);
    } else if (this.props.data.formValues.charGender === 'androgen' || this.props.data.formValues.charGender === 'neutral') {
      randomFamousPerson = Math.floor(Math.random() * this.props.data.famousUnisex.length);
    } else {
      const GENDER_LIST = [this.props.data.famousMales, this.props.data.famousFemales, this.props.data.famousUnisex];
      randomFamousPerson = Math.floor(Math.random() * GENDER_LIST.length);
    }
  }

  render() {
    // console.log(this.props.data)
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
                <div id="name" className="col-12 text-left"><strong>Name: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'name', randomFamousPerson)}</div>
                <div id="age" className="col-12 mt-1 text-left"><strong>Age: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'age', randomFamousPerson)}</div>
                <div id="horoscope" className="col-12 mt-1 text-left"><strong>Horoscope: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'horoscope', randomFamousPerson)}</div>
                <div id="type" className="col-12 mt-1 text-left"><strong>Type: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'type', randomFamousPerson)}</div>
                <div id="bio" className="col-lg-8 mt-1 text-left"><strong>Bio: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'bio', randomFamousPerson)}</div>
                <div id="adjectives" className="col-12 mt-1 text-left"><strong>Adjectives: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'adjectives', randomFamousPerson)}</div>
                <div id="quirky-fact" className="col-8 mt-1 text-left"><strong>Quirky fact: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'quirkyFact', randomFamousPerson)}</div>
                <div id="profession" className="col-12 mt-1 text-left"><strong>Profession: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'profession', randomFamousPerson)}</div>
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
export default Profile;