import React, { useState } from "react";

function MemberForm({ values, update, submit }) {
	const formHandler = (e) => {
		const { name, value } = e.target;
		update(name, value);
	};

	const formSubmit = (e) => {
		e.preventDefault();
		submit();
	};

	return (
		<form className="form container" onSubmit={formSubmit}>
			<div className="form-group inputs">
				<label>
					Username
					<input
						type="text"
						name="name"
						onChange={formHandler}
						value={values.name}
						placeholder="Enter your username"
						maxLength="30"
					/>
				</label>

				<label>
					Email
					<input
						type="email"
						name="email"
						onChange={formHandler}
						value={values.email}
						placeholder="Enter your preferred e-mail"
						maxLength="30"
					/>
				</label>

				<label>
					Role
					<select name="role" value={values.role} onChange={formHandler}>
						<option value="">-- Please Select a Role --</option>
						<option value="frntDev">Frontend Developer</option>
						<option value="jrDev">Jr. React Developer</option>
						<option value="srDev">Sr. React Developer</option>
						<option value="bckDev">Backend Developer</option>
						<option value="prjLd">Project Lead</option>
					</select>
				</label>
				<div className="submit">
					<button disabled={!values.name || !values.email || !values.role}>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}

export default MemberForm;
