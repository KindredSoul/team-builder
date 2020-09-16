import React from "react";

export default function TeamMember({ info }) {
	if (!info) {
		return <h2>Bring members back from break...</h2>;
	}

	return (
		<div className="member-container">
			<h2>Member Name: {info.name}</h2>
			<p>Email: {info.email} </p>
			<p>Role: {info.role} </p>
		</div>
	);
}
