import React from "react";
import "./Nav.css";

const Nav = props => (
<div className="score-nav">
  <h1 className="title">Saturday Morning Cartoons</h1>
  <h2 className="message">{props.gameText}</h2>
  <h2 className="scores"> Current Score: {props.currentScore} | Top Score: {props.topScore}</h2>
</div>
);
export default Nav;
