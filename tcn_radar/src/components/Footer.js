import React from 'react';
import {withRouter} from 'react-router';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Male'
    }
  }

  render() {

    return (
      <div className="container-fluid">

      </div>
    )
  }
}

export default withRouter(Footer);
