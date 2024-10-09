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
import DressStyle from "@organisms/dressStyle";
import Testimony from "@organisms/testimony";

// -- dummy data
import bannerData from "./data/bannerData";
import brandsData from "./data/brandsData";
import newArrivalData from "./data/newArrivalData";
import topSellingData from "./data/topSellingData";
import dressStyleData from "./data/dressStyleData";
import testimonyData from "./data/testimonyData";

const Home = (props) => {
	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("");
	}, [setMenu]);

	return (
		<>
			<Banner {...bannerData} />
			<Brands {...brandsData} />
			<NewArrival {...newArrivalData} />
			<TopSelling {...topSellingData} />
			<DressStyle {...dressStyleData} />
			<Testimony {...testimonyData} />
		</>
	);
};

export default Home;
