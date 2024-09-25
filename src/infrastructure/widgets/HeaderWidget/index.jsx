// -- models
// import headerModel from "@models/header";

// -- organisms
import Header from "@organisms/Header";

// -- dummy data
import headerData from "./headerData";

const HeaderWidget = async () => {
	// const { data, error } = await headerModel.list();

	return <Header {...headerData} />;
};

export default HeaderWidget;
