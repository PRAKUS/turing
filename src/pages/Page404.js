import React from "react";

const ErrorPage = ({ location }) => {
	return (
		<div style={{ fontSize: "200px" }}>
			404
			{location.pathname}
		</div>
	);
};
export default ErrorPage;
