import React from 'react'

const Hoc = (OriginalComponent) => {
	class NewComponent extends React.Component {

		constructor(props) {
			super(props);
			this.state = { count: 0 };
		}

		increment = () => {
	
			this.setState({ count: this.state.count + 1 });
		}
        decrement = () => {
            this.setState({ count: this.state.count - 1});
        }

		render() {			
			return <OriginalComponent
				increment={this.increment}
				show={this.state.count} 
                decrement={this.decrement}/>
                
		}
	}
	return NewComponent
}

export default Hoc