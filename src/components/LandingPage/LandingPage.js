import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

import {Button} from 'reactstrap';


class LandingPage extends Component {
  // check if user has seen the landing page 
  setLocalStorage = () => {
    localStorage.setItem('hasSeenLanding', true)
  }

  componentDidMount() {
  if (localStorage.getItem('hasSeenLanding')){
    // this.props.history.push('/revere')
  }
}


  render() {
    return (
      <div style={{textAlign: "center", padding: "2rem"}}>
        <h1> Welcom to Community Connect</h1>
        <p style={{ margin: "5rem", fontSize: "1.2rem", lineHeight: "2.2rem" }}>
          "Community Connect" is a health resource web application that aims to
          consolidate information about businesses and organization available in
          communities that promote healthy lifestyle choices. A health resource
          is defined as services or materials that improve the quality of life
          of others, ranging from affordable child care, substance abuse
          counseling, domestic violence support, and more. We are working in
          conjunction with Massachusetts General Hospital's Center for Community
          Health Improvement, MGH Revere HealthCare Center, and Revere CARES
          Coalition to create an extensive database in our pilot region of
          Revere, Chelsea, Charlestown, and eventually the Greater Boston Area.
        </p>

        <Button 
        color='success'
        tag={Link}
        to={"/revere"}
        onClick={this.setLocalStorage}
        > Go to Resources</Button>
      </div>

    );
  }
}

export default withRouter(LandingPage);