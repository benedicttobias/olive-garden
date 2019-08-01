'use strict';

import React from 'react';

require('styles//CompositionVsInheritance.css');

function FancyBorder(props){
  return(
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog(){
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

function Dialog(props){
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function DialogWithChildren(props){
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class CompositionVsInheritanceComponent extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    alert('close me...');
  }
  
  render() {
    return (
      <div>  
        <WelcomeDialog></WelcomeDialog>
        <Dialog title="News" message="Agung Hercules Wafat" />
        <DialogWithChildren title="Another news" message="This works too with children">
          <button onClick={this.handleClick}>Click me</button>
        </DialogWithChildren>
      </div>
    );
  }
}

CompositionVsInheritanceComponent.displayName = 'CompositionVsInheritanceComponent';

// Uncomment properties you need
// CompositionVsInheritanceComponent.propTypes = {};
// CompositionVsInheritanceComponent.defaultProps = {};

export default CompositionVsInheritanceComponent;
