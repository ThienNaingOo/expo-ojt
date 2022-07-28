import React, { Component } from "react";

const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors: any) => {
	let valid = true;
	Object.values(errors).forEach((val: any) => val.length > 0 && (valid = false));
	return valid;
};

export default class Login extends Component {
    constructor(props: any) {
        super(props);
		this.state = {
			fullName: null,
			email: null,
			password: null,
			errors: {
				fullName: "",
				email: "",
				password: ""
			}
        }
    }

    handleChange = (field: any, value: any) => {
		let errors = this.state.errors;

		switch (field) {
			case "fullName":
				errors.fullName = value.length < 5 ? "Full Name must be 5 characters long!" : "";
				break;
			case "email":
				errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
				break;
			case "password":
				errors.password = value.length < 8 ? "Password must be 8 characters long!" : "";
				break;
			default:
				break;
		}

		this.setState({ errors, [field]: value });
	};

    isNotEmpty = () => {
		const { fullName, email, password } = this.state;
		let isNoError = true;

		if (!fullName) {
			this.setState(prevState => ({
				errors: {
					...prevState.errors,
					fullName: "Full Name is required."
				}
			}));
			isNoError = false;
		}
		if (!email) {
			this.setState(prevState => ({
				errors: {
					...prevState.errors,
					email: "Email Address is required."
				}
			}));
			isNoError = false;
		}
		if (!password) {
			this.setState(prevState => ({
				errors: {
					...prevState.errors,
					password: "Password is required."
				}
			}));
			isNoError = false;
		}

		return isNoError;
	};
}