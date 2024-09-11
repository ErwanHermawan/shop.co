// -- style
import style from "./style.module.scss";

import headerData from "./headerData";

const Subscribe = (props) => {
	return (
		<section className={style.subscribe}>
			<div className="container">
				<div className={style.box}>
					<h3 className={style.title}>
						STAY UPTO DATE ABOUT OUR LATEST OFFERS
					</h3>
					<div className={style.form}></div>
				</div>
			</div>
		</section>
	);
};
