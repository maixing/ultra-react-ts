import * as React from "react";
import "./App.less";
const logo = require("./logo.svg");

export interface IProps {
	name: string;
	enthusiasmLevel?: number;
}

interface IState {
	name:string;
	currentEnthusiasm: number;
}

class App extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			name:props.name,
			currentEnthusiasm:0
		};
	  }
	public render() {
		console.log(this);
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">欢迎</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.tsx</code> and save to reload.
				</p>
			</div>
		);
	}
}
export default App;
