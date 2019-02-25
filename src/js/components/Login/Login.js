import React, { Component } from 'react';
import './Login.css';
import { validateUser } from "../../actions/validate";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      success: false,
      error: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit(e) {
    e.preventDefault();
    const newItem = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.validateUser(newItem);
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.error) {
      return {
        error: true
      };
    } else if (nextProps.user.success !== prevState.success) {
      return {
        success: nextProps.user.success,
        error: false
      };
    } else {
      return null;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.success !== prevState.success) {
      localStorage.setItem("username", this.state.username);
      localStorage.setItem("password", this.state.password);
      this.props.history.push("/home");
    }
  }
render() {
  return (
    <div className="login-container">
    <form onSubmit={this.onSubmit}>
    <div className="login-inner">
  <label for="uname"><b>Username</b></label>
  <input className="inputfield" type="text" placeholder="Enter Username" name="username" required value={this.state.username}   onChange={this.onChange} />

  <label for="psw"><b>Password</b></label>
  <input className="inputfield" type="password" placeholder="Enter Password" name="password" required value={this.state.password}  onChange={this.onChange}/>

  <button className="uui-button blue" type="submit">Login</button>
  </div>
</form>
</div>
  )
}
}
const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = {
  validateUser
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
