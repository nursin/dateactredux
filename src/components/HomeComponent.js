//dependencies
import React from 'react';
import { Card, CardHeader, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// action creators

// remove data for a generic card where info will change upon button clicks
function RenderCard({ item, nextPage }) {
  return (
    <Card className="card custom-card">
      <CardHeader className="bg-gradient" >
        <h3 className="text-center text-white" >Date Act Instructions</h3>
      </CardHeader>
      <CardBody>
        <p>If you remember only one thing, remember <strong>"Yes and ..."</strong>. When creating a base reality you will always say yes and ... to the other persons creations. <strong>Never</strong> deny the reality your partner creates, but you may deny things that occur in the reality. Start by establishing base reality with <strong>who, where, what your doing</strong>. This will be easier since you will be on a real date, but the rest is creations. </p><p>You can take your reality to the next level by <strong>finding the weird thing</strong>, something that seems odd, and then focus on that thing. You want to use that weird thing and every once in a while bring it back, but <strong>don't kill it</strong> by going constantly talking about it. Just every few moments bring it back.</p><p>To play the game, choose the features you would like your character to have, then hit that generate button. a character profile will appear. You will use this profile to act out on a date with your partner, who will have also generated a character. Also, you can create your own character. These dont save right now so screenshot your character profile. Later the save function will be added. <strong>Select start to begin.</strong></p>
        <Link type="button" to='/home/choosefeaturesform/' className="col btn btn-lg text-white bg-blue button-hover-bg-gradient">Start
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
          <RenderCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
