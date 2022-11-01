import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { login, signUpProvider, forgetPassword } from "../../firebase";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState(null);

	const submitHandler = async (e) => {
		if (!email || !password) {
			setError("Invalid Entry");
			return;
		}

		const message = await login(email, password);

		if (message) {
			setError(message);
		} else {
			setError(null);
			navigate("/");
		}
	};

	const providerHandler = () => {
		signUpProvider();
		navigate("/");
	};

	const forgetPasswordHandler = async (email) => {
		const message = await forgetPassword(email);
		if (message) setError(message);
	};

	return (
		<div className={`page ${classes.Login}`}>
			<div className={classes.LoginForm}>
				<h1> Login</h1>

				{error && <p className="text-danger text-center m-3">{error} </p>}
				<form>
					<div className="mb-3">
						<label htmlFor="email" className="form-label text-light">
							{" "}
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							autoComplete="off"
							placeholder="Enter your Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label text-light">
							{" "}
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							autoComplete="off"
							placeholder="Enter your Email"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div
						className="text-center text-warning mt-3"
						style={{ cursor: "pointer" }}
						onClick={() => forgetPasswordHandler(email)}
					>
						Forget Password?
					</div>

					<div className="d-grid">
						<button
							type="button"
							className="btn btn-primary form-control mt-3"
							onClick={submitHandler}
						>
							Login
						</button>
					</div>
				</form>
				<button
					type="button"
					className="btn btn-primary form-control mt-3"
					onClick={providerHandler}
				>
					Continue with Google
				</button>
				<p className="text-center text-light mt-3">
					Don't have an account?
					<span
						className="text-warning"
						style={{ cursor: "pointer" }}
						onClick={() => navigate("/register")}
					>
						Sign up
					</span>
				</p>
			</div>
		</div>
	);
};

export default Login;
