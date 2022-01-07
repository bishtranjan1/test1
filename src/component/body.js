import React from "react";
import Article from "./article";
class Body extends React.Component {
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
