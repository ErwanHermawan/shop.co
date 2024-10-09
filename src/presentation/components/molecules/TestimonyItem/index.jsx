// -- core
import Link from "next/link";

// -- style
import style from "./style.module.scss";

const TestimonyItem = (props) => {
	const { name, testimony, rating } = props;

	return (
		<div className={style.card}>
			<div className={style.box}>
				<ul className={style.star}>
					{(() => {
						const stars = [];
						const fullStars = Math.floor(rating); // Full stars
						const hasHalfStar = rating % 1 !== 0; // Check if there's a half star

						// Push full stars
						for (let i = 1; i <= fullStars; i++) {
							stars.push(
								<li className={style.item} key={`star-${i}`}>
									<i className={`fi-star ${style.icon}`}></i>
								</li>
							);
						}

						// Push half star if applicable
						if (hasHalfStar) {
							stars.push(
								<li className={style.item} key={`star-half`}>
									<i className={`fi-star-half ${style.icon}`}></i>
								</li>
							);
						}

						return stars;
					})()}
				</ul>
				<h5 className={style.name}>
					{name} <i className="fi fi-check-circle"></i>
				</h5>
				<p className={style.testimony}>{testimony}</p>
			</div>
		</div>
	);
};

export default TestimonyItem;
