'use strict';

import React from 'react';

require('styles//HandlingEvents.css');

class HandlingEventsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    }

    // binding is required here
    this.handleClick = this.handleClick.bind(this);
  }

  // Note that anon function require () surrounding the {}
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // Example to passing e to function
  deleteRow(e){
    alert(e.target.innerHTML);
  }

  render() {
    return (
      <div className="handling-events-component">
        <h3>Handling Events Example</h3>
        <button onClick={this.handleClick}>
          { this.state.isToggleOn ? 'ON' : 'OFF' }
        </button>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button onClick={(e) => this.deleteRow(e)}>Hello!</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

HandlingEventsComponent.displayName = 'HandlingEventsComponent';

// Uncomment properties you need HandlingEventsComponent.propTypes = {};
// HandlingEventsComponent.defaultProps = {};

export default HandlingEventsComponent;