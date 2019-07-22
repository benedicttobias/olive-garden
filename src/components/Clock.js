import React from 'react';

class ClockComponent extends React.Component{
  constructor(props){
    // super() is a javascript keyword that is used to call functions on a parent 's object.
    // This is necessary to preserve the functionality of the constructor
    // function of the class your component is inheriting from.props is being passed along 
    // as well to make sure super has access to the same arguments as the overwriting constructor.
    // You should always pass props when calling the super constructor in a component class.
    super(props);

    // Set the state
    // state is a private property of components, a piece of information that only they can read
    // and only they can change.Nothing outside of a component should ever know about a 
    // component's state. If a component wants to share information about its state with
    // another component, it can do that by passing it explicitly via props in the call to 
    // the other component.
    this.state = {
      date: new Date()
    }
  }

  // The componentDidMount() method runs after the component output has been rendered to the DOM.This is a good place to set up a timer:
  componentDidMount(){
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  // Executed when it is unmounted
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  // Method for update the component local state called on componentDidMount()
  tick(){
      this.setState({
        date: new Date()
      });
  }
  
  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

// This is important so it can be used somewhere else
export default ClockComponent;

// Why using state over props? because props is read-only

// The lifecycle:
// render -> constructor -> componentDidMount -> componentWillUnmount()