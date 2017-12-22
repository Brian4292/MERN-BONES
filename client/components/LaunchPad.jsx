import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const LaunchPad = function (props) {
  return (
    <Fragment>
      <h2>Brian's Boilermaker</h2>
      <a href="https://www.linkedin.com/in/brian-deriel/">Click if you want to Hire Me</a>
      <br />
      <NavLink to="/login">LogIn</NavLink>
      <br />
      <NavLink to="/login">SignUp</NavLink>
      <h3>{props.user.email} is logged in</h3>
    </Fragment>
  );
};

const mapState = ({ user }) => ({ user });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(LaunchPad);

LaunchPad.propTypes = {
  user: PropTypes.object.isRequired,
};
