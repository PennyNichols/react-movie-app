import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthContext";

function App() {
	return (
		<AuthProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/details/:id" element={<MovieDetails />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
