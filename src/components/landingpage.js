import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div className="landing" style={{width: '100%', height: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
      <Cell col={12}>
      <img
          src={require("../img/image.png")}
          alt ="avatar"
          className="avatar-img"
      />
      <div className="banner-text">
      <h1>Artem Aleksieiev</h1>
      <hr/>
      <p>HTML/CSS | Bootstrap | Javascript | React | Python | Swift </p>

      <div className="social-links">

      {/* LinkedIn */}
      <a href="http://google.com" rel="noopener noreferrer" targer="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
      </a>

      {/* Github */}
      <a href="http://google.com" rel="noopener noreferrer" targer="_blank">
        <i className="fa fa-github-square" aria-hidden="true" />
      </a>

      {/* Facebook */}
      <a href="http://google.com" rel="noopener noreferrer" targer="_blank">
        <i className="fa fa-facebook-square" aria-hidden="true" />
      </a>

      {/* Instagram */}
      <a href="http://google.com" rel="noopener noreferrer" targer="_blank">
        <i className="fa fa-instagram" aria-hidden="true" />
      </a>
      </div>
      </div>
      </Cell>
      </Grid>

      </div>
    )
  }
}

export default Landing;
