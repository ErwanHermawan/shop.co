"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

// -- organisms
import Banner from "@organisms/Banner";
import Brands from "@organisms/Brands";
import NewArrival from "@organisms/NewArrival";
import TopSelling from "@organisms/TopSelling";

const Home = (props) => {
	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("");
	}, [setMenu]);

	return (
		<>
			<Banner />
			<Brands />
			<NewArrival />
			<TopSelling />
		</>
	);
};

export default Home;
