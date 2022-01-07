import React, { Component } from "react";
import FunctionlComponent from "./samplefunctionl";

class Article extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "Cryprocurruncy", place: "alwar" };
		this.handleChange = this.handleChange.bind(this);
		console.log("constructor");
	}
	handleChange = function (ev) {
		this.setState({ place: ev.target.value });
	};
	componentDidMount() {
		console.log("componentDidMount");
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidupdate due to state change");
	}
	render() {
		console.log("render");
		return (
			<article>
				<div>this article is about</div>
				<input
					type="text"
					id="fname"
					name="fname"
					onChange={this.handleChange}
				/>
				<FunctionlComponent name={this.state.name} city={this.state.place} />
			</article>
		);
	}
}

export default Article;
