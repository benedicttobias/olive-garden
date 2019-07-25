'use strict';

import React from 'react';

require('styles//Forms.css');

class FormsComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      textAreaValue: '',
      selectedCar: 'honda',
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleMultipleInput = this.handleMultipleInput.bind(this);
  }

  handleChange(event){
    this.setState({
      // This will set the current value of the element
      value: event.target.value.toUpperCase()
    })
  }

  handleSubmit(event){
    event.preventDefault();
  }

  handleTextArea(event){
    this.setState({
      textAreaValue: event.target.value
    })
  }

  handleDropDown(event){
    this.setState({
      selectedCar: event.target.value
    })
  }

  handleMultipleInput(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // Computed property naming [name]
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="forms-component">
        <forms>
          <label>
            Name:
            {/* This will pull whatever state currently has */}
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Hobby:
            <textarea value={this.state.textAreaValue} onChange={this.handleTextArea}></textarea>
          </label>
          <br></br>
          <label>
            Car
            <select value={this.state.selectedCar} onChange={this.handleDropDown}>
              <option value="yamaha">Yamaha</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="supra">Supra</option>
            </select>
          </label>
          <br></br>
          <label>
            Is going to school<input type="checkbox" name="inputOne" checked={this.state.isGoing} onChange={this.handleMultipleInput} />
          </label>
          <br></br>
          <label>
            Number of guests
            <input type="text" name="inputTwo" value={this.state.numberOfGuests} onChange={this.handleMultipleInput} />
          </label>
          <input type="button" value="Submit"></input>
        </forms>
      </div>
    );
  }
}

FormsComponent.displayName = 'FormsComponent';

// Uncomment properties you need
// FormsComponent.propTypes = {};
// FormsComponent.defaultProps = {};

export default FormsComponent;
