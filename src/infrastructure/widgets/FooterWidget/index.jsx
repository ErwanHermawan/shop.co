"use client";

// -- models
// import footerModel from "@models/footer";

// -- hooks
// import useFirstLoad from "@hooks/useFirstLoad";

// -- organisms
import Footer from "@organisms/Footer";

// dummy data
import footerData from "./footerData";

const FooterWidget = (props) => {
	// const { ready, data, error } = useFirstLoad(footerModel.list());

	return <Footer {...footerData} />;
};

export default FooterWidget;
