import React, { useState } from "react";
import "./App.css";
import MemberForm from "./MemberForm";
import TeamMember from "./TeamMember";

const initialValues = {
	name: "",
	email: "",
	role: "",
};

function App() {
	const [teamMembers, setTeamMembers] = useState([]);
	const [formValues, setFormValues] = useState(initialValues);

	const updateMemberForm = (inputName, inputValue) => {
		setFormValues({ ...formValues, [inputName]: inputValue });
	};

	const submitMemberForm = () => {
		const newMember = {
			name: formValues.name.trim(),
			email: formValues.email.trim(),
			role: formValues.role,
		};
		setTeamMembers([...teamMembers, newMember]);
		setFormValues(initialValues);
	};

	return (
		<div className="App">
			<h1>Team Member Application</h1>

			<MemberForm
				values={formValues}
				update={updateMemberForm}
				submit={submitMemberForm}
			/>
			{teamMembers.map((member) => {
				return <TeamMember key={member.name} info={member} />;
			})}
		</div>
	);
}

export default App;
