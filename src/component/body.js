import React from "react";
import Article from "./article";
class Body extends React.Component {
	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidupdate body");
	}
	render() {
		return (
			<React.Fragment>
				<aside>My company name is {this.props.company}</aside>
				<Article />
			</React.Fragment>
		);
	}
}
export default Body;
