import { createContext, useEffect, useState } from "react";
import { userObserver } from "../firebase";
export const AuthContext = createContext();

export const Pi = 3.14;
const AuthProvider = (props) => {
	const [currentUser, setCurrentUser] = useState();
	useEffect(() => userObserver(setCurrentUser), []);

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
