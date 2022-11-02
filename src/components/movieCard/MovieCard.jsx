import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import classes from "./MovieCard.module.css";

const MovieCard = (props) => {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const imgUrl = "https://image.tmdb.org/t/p/w1280";
	const { title, poster_path, overview, vote_average, id } = props.movie;

	const showDetails = (id) => {
		if (currentUser) {
			navigate(`/details/${id}`);
		} else {
			alert("Please login to see the movie details");
		}
	};

	return (
		<div className={classes.movie} onClick={() => showDetails(id)}>
			<img src={`${imgUrl}${poster_path}`} alt={title} />
			<div
				className="text-center p-2 text-white"
				style={{ borderTop: "1px solid white" }}
			>
				<h5>{title}</h5>
			</div>
			<div className={classes.overview}>
				<h2> Overview</h2>
				<h5>{title}</h5>
				<p>{overview}</p>
			</div>
		</div>
	);
};

export default MovieCard;
