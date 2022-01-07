// const FunctionlComponent = (props) => {
// 	return (
// 		<div>
// 			{props.name} data from article and place in {props.city}
// 		</div>
// 	);
// };

// export default FunctionlComponent;
import React from "react";

class FunctionlComponent extends React.Component {
	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate functional component");
	}
	render() {
		return (
			<div>
				{this.props.name} data from article and place in {this.props.city}
			</div>
		);
	}
}

export default FunctionlComponent;
