import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { logout } from "../firebase";

const Navbar = () => {
	const navigate = useNavigate();
	let { currentUser } = useContext(AuthContext);
	const [search, setSearch] = useState();

	const searchHandler = () => {};

	const logoutHandler = () => {
		logout();
		navigate("/login");
	};

	return (
		<nav
			className="navbar navbar-expand-lg fixed-top navbar-dark"
			style={{ backgroundColor: "#070707" }}
		>
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<h4 className="text-danger"> React Movie App</h4>
				</Link>
				<div className="d-flex align-items-center">
					{currentUser ? (
						<>
							<form class="d-flex">
								<input
									class="form-control me-2"
									type="search"
									onChange={(e) => setSearch(e.target.value)}
									placeholder="Search"
									value={search}
								/>
								<button
									class="btn btn-outline-success"
									type="button"
									onClick={searchHandler}
								>
									Search
								</button>
							</form>
							<h4 className="text-capitalize d-inline-block text-warning mx-2">
								{currentUser?.displayName}
							</h4>
							<button
								type="button"
								className="ms-2 btn btn-outline-light"
								onClick={logoutHandler}
							>
								Logout{" "}
							</button>
						</>
					) : (
						<>
							<button
								type="button"
								className="ms-2 btn btn-outline-light"
								onClick={() => navigate("/login")}
							>
								{" "}
								Login{" "}
							</button>
							<button
								type="button"
								className="ms-2 btn btn-outline-light"
								onClick={() => navigate("/register")}
							>
								Register
							</button>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
