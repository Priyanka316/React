import React, {PureComponent} from 'react';

class Purecompo extends PureComponent {
  render() {
    console.log("A Pure Component is a component that performs a check on the value of React props before deciding whether to re-render the component or not.");

    return (
      <div>
        Purecomponent {this.props.name} <hr />
      </div>
    )
  }
}

export default Purecompo;