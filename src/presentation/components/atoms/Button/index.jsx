// -- core
import Link from "next/link";

// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "@atoms/SystemIcon";

const Button = (props) => {
	const { variant = "primary", category, children, href, icon } = props;

	const iconCont = icon && <SystemIcon name={icon} />;

	let variantStyle = style.btn;
	switch (variant) {
		case "primary":
			variantStyle += " " + style.btnPrimary;
			break;
		case "white":
			variantStyle += " " + style.btnWhite;
			break;
		case "outline":
			variantStyle += " " + style.btnOutline;
			break;
	}

	return (
		<>
			{href && (
				<Link {...props} className={variantStyle}>
					{children}
					{iconCont}
				</Link>
			)}
			{!href && (
				<button {...props} className={variantStyle}>
					{children}
					{iconCont}
				</button>
			)}
		</>
	);
};

export default Button;
