global._babelPolyfill = false; /* Can only have one instance of babel-polyfill */

import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
// import autobind from 'autobind-decorator'

import { compose, withStateHandlers } from 'recompose'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wasm: null
		}
	}

	async handleWASM() {
		/* In the future we can import rust_sandbox.wasm as:
		 *
		 * import * as wasm from 'rust_sandbox'; 
		 *
		 */
		const js = await import('./rust_sandbox'); 
		if (this.mounted) { /* We should be mounted at this point */
			this.setState({wasm: js}); 
		}
	}

	componentDidMount() {
		this.mounted = true;
		this.handleWASM();
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	render() {
		return this.state.wasm ? (
			<div>
				<p>Rust String: {this.state.wasm.hello_world()}</p>
				<p>Rust Struct: ContainsData {"{"} {
					this.state.wasm.ContainsData.new().add(10)
				} {"}"}</p>
			</div>
		) : ( <div>Loading...</div>)
	}
}

ReactDOM.render(<App />, document.getElementById("application"));
