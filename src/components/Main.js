require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Clock from './Clock';
import HandlingEvents from './HandlingEventsComponent';
import ConditionalRendering from './ConditionalRenderingComponent';

function Welcome(props){
    return <h1>Hello, {props.name}. This is using user-defined component</h1>
}

function AppComponent() {
    return (
      <div className="index">
        <div className="notice">
          <Welcome name="Ben"></Welcome>
        </div>
        <Clock />
        <HandlingEvents />
        <ConditionalRendering />
      </div>
    );
}

AppComponent.defaultProps = {
};

export default AppComponent;
