'use strict';

import React from 'react';

require('styles/page/ReactTutorial.css');

class ReactTutorialComponent extends React.Component {
  render() {
    return (
      <div className="reacttutorial-component">
        Test component here!
      </div>
    );
  }
}

ReactTutorialComponent.displayName = 'PageReactTutorialComponent';

// Uncomment properties you need
// ReactTutorialComponent.propTypes = {};
// ReactTutorialComponent.defaultProps = {};

export default ReactTutorialComponent;
