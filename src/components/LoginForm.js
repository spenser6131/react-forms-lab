import React from "react";

class LoginForm extends React.Component {

  state = {
    username: '',
    password: '',
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) {
      console.log("Failed to login")
      return
    }
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
