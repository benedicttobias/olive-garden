require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Clock from './Clock';
import ReactTutorial from './page/ReactTutorialComponent';

let yeomanImage = require('../images/yeoman.png');

function Welcome(props){
    return <h1>Hello, {props.name}. This is using user-defined component</h1>
}

function AppComponent() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">
          <Welcome name="Ben"></Welcome>
          <Welcome name="John"></Welcome>
          <Welcome name="Drake"></Welcome>
        </div>
        <ReactTutorial></ReactTutorial>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
}

AppComponent.defaultProps = {
};

export default AppComponent;
