import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={this.props.startLoginHandler}>LOGIN OR OUT </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  startLoginHandler: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
