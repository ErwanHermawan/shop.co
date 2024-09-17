// -- atoms
import Button from "@atoms/Button";
import FormControl from "@atoms/FormControl";

// -- style
import style from "./style.module.scss";

const Subscribe = (props) => {
	return (
		<div className={style.subscribe}>
			<h3 className={style.title}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
			<div className={style.form}>
				<FormControl placeholder="Enter your email address" icon="search" />
				<div className={style.button}>
					<Button variant="white">Subscribe to Newsletter</Button>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
