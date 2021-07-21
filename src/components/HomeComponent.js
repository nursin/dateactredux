//dependencies
import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactHtmlParser } from 'react-html-parser'
// action creators
import { renderChooseForm } from '../redux/ActionCreators';


const mapStateToProps = (state) => {
  return {
    Greeting: state.Greeting,
    GameCardHeader: state.GameCardHeader
  }
}

const mapDispatchToProps = {
  renderChooseForm
}

// function handleSubmit() {
//   renderChooseForm();
// }

function Home(props) {


  // remove data for a generic card where info will change upon button clicks
  function RenderCard() {
    console.log(props)
    return(

        <Card className="card custom-card">
          <CardHeader className="bg-gradient" >
          <h3 className="text-center text-white" >{props.GameCardHeader.CardHeader}</h3>
          </CardHeader>
          <CardBody>
            {props.GameCardHeader.CardBody}
            <Link type="button" onClick={() => props.renderChooseForm()} className="col btn btn-lg text-white bg-blue button-hover-bg-gradient">Start 
            </Link>
          </CardBody>
        </Card>

    );
  }
  
  return (
    <div className="container">
      <div className="row row-content">
        <div className="col">
          <RenderCard />
        </div>
      </div>
    </div> 
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
