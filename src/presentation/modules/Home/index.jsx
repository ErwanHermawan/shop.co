"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

// -- organisms
import Banner from "@organisms/Banner";

const Home = (props) => {
	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("");
	}, []);

	return (
		<>
			<Banner />
		</>
	);
};

export default Home;
