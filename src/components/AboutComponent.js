import React, { Component } from 'react';

class About extends Component {

  render() {
    return(
      <div className="container">
        <div className="row mt-4">
          <div className="col text-left">
            <h2>About us</h2>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-md-6">
            <h3>Vision</h3>
            <p>
              Date Act will be used by people on first dates to break the ice before getting to know each other, and used by new and old couples to have little fun together. There will be a large database of profiles for famous, not famous, and created character types.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src="../assets/images/eye-iris.jpg" alt="iris" className="img-fluid img-thumbnail" />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-md-6 order-last order-md-first">
            <img src="../assets/images/mission.jpg" alt="mission" className="img-fluid img-thumbnail" />
        </div>
        <div className="col-12 col-md-6">
          <h3>Mission</h3>
          <p>
            Date Act attempts to create a fun game for couples to enjoy while out on dates. This will give couples the chance to be someone else, and perhaps learn new things about their partners in the process. Date Act will improve between couples: communication, reaction time, and acting skills. Additionally, we strive to help couples discover their strengths and weaknesses in the process.
          </p>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h3>Date Act Instructions</h3>
          <p id="dateActInstructions">If you remember only one thing, remember <strong>"Yes and ..."</strong>. When creating a base reality you will always say yes and ... to the other persons creations. <strong>Never</strong> deny the reality your partner creates, but you may deny things that occur in the reality. Start by establishing base reality with <strong>who, where, what your doing</strong>. This will be easier since you will be on a real date, but the rest is creations. </p><p>You can take your reality to the next level by <strong>finding the wierd thing</strong>, something that seems odd, and then focus on that thing. You want to use that wierd thing and every once in a while bring it back, but <strong>don't kill it</strong> by going constantly talking about it. Just every few moments bring it back.</p>
        </div>
        <div className="col-12 col-md-6">
          <img src="../assets/images/rules.jpg" alt="rules" className="img-fluid img-thumbnail" />
        </div>
      </div>
    </div>
    );
  }
}

export default About;