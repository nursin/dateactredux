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
    GameCard: state.GameCard
  }
}

const mapDispatchToProps = {
  renderChooseForm
}

// function handleSubmit() {
//   renderChooseForm();
// }

// remove data for a generic card where info will change upon button clicks
function RenderCard({ item, nextPage }) {
  return (
    <Card className="card custom-card">
      <CardHeader className="bg-gradient" >
        <h3 className="text-center text-white" >{item.CardHeader}</h3>
      </CardHeader>
      <CardBody>
        {item.CardBody}
        <Link type="button" onClick={() => nextPage.renderChooseForm()} className="col btn btn-lg text-white bg-blue button-hover-bg-gradient">{item.CardButton}
        </Link>
      </CardBody>
    </Card>
  );
}


function Home(props) {
  console.log(props)
  return (
    <div className="container">
      <div className="row row-content">
        <div className="col">
          <RenderCard item={props.GameCard} nextPage={props}/>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
