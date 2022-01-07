import React, { Component } from "react";
import FunctionlComponent from "./samplefunctionl";

class Article extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "Cryprocurruncy", place: "alwar" };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange = function (ev) {
		this.setState({ place: ev.target.value });
	};
	render() {
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
