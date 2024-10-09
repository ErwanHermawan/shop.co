// -- core
import Link from "next/link";

// -- style
import style from "./style.module.scss";

const TestimonyItem = (props) => {
	const { name, testimony, rating } = props;
	return (
		<section className={style.card}>
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

					<li className={style.item}>
						<p className={style.rating}>
							{rating}
							<span className={style.ratingFull}>/5</span>
						</p>
					</li>
				</ul>
				<p className={style.name}>{name}</p>
				<p className={style.testimony}>{testimony}</p>
			</div>
		</section>
	);
};

export default TestimonyItem;
