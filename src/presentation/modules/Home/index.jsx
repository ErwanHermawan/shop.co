"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

const Home = (props) => {
	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("");
	}, []);

	return (
		<>
			<div className="container">
				<h1>Home Page</h1>
			</div>
		</>
	);
};

export default Home;
