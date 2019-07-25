'use strict';

import React from 'react';

require('styles//ListsAndKeys.css');

const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map(x => x * 2);

function Print(props){
  return (
    <span>{props.num.join(' - ')}</span>
  )
}

function NumberList(){
  // key is required per React warning
  const listNumbers = numbers.map(num => <li key={num * 2}>{num * 2}</li>)

  return (
    <ul>{listNumbers}</ul>
  )
}

function InlineNumberList(){
  return (
    <ul>
      {numbers.map(x =>
        <li key={x}>{x * 2}</li>)
      }
    </ul>
  )
}

class ListsAndKeysComponent extends React.Component {
  render() {
    return (
      <div className="lists-and-keys-component">
        <div>original: <Print num={numbers} /></div>
        <div>doubled: <Print num={doubled} /></div>
        <div>List numbers: <NumberList /></div>
        <div>Inline <InlineNumberList></InlineNumberList></div>
      </div>
    );
  }
}

ListsAndKeysComponent.displayName = 'ListsAndKeysComponent';

// Uncomment properties you need
// ListsAndKeysComponent.propTypes = {};
// ListsAndKeysComponent.defaultProps = {};

export default ListsAndKeysComponent;
