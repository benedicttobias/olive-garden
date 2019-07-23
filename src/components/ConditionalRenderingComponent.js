'use strict';

import React from 'react';

require('styles//ConditionalRendering.css');

function UserGreeting(){
  return <h1>Welcome!</h1>
}

function GuestGreeting(){
  return <h1>Please Sign Up.</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn){
    return <UserGreeting></UserGreeting>
  }
  
  return <GuestGreeting></GuestGreeting>
}

function LoginButton(props){
  return (<button onClick={props.onClick}>Login</button>);
}

function LogoutButton(props){
  return (<button onClick={props.onClick}>Logout</button>);
}

class LoginControl extends React.Component {
  constructor(props){
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick(){
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogoutClick(){
    this.setState({
      isLoggedIn: false
    });
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;

    let button;

    if (isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
    } else {
      button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}></Greeting>
        {button}
      </div>
    );
  }
}

class ConditionalRenderingComponent extends React.Component {
  render() {
    return (
      <div className="conditional-rendering-component">
        <h3>Conditional Rendering Example</h3>
        <LoginControl />
      </div>
    );
  }
}

ConditionalRenderingComponent.displayName = 'ConditionalRenderingComponent';

// Uncomment properties you need
// ConditionalRenderingComponent.propTypes = {};
// ConditionalRenderingComponent.defaultProps = {};

export default ConditionalRenderingComponent;
