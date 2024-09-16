// -- core
import Image from "next/image";
import Link from "next/link";

// -- style
import style from "./style.module.scss";

const ProductItem = (props) => {
	const { image, to, title, rating, price, discount } = props;
	return (
		<section className={style.card}>
			<Link href={to} className={style.link}>
				{title}
			</Link>
			<div className={style.image}>
				<Image src={image} alt={title} className={style.imageEl} />
			</div>
			<div className={style.text}>
				<h4 className={style.title}>{title}</h4>
				<ul className={style.star}>
					{(() => {
						const stars = [];
						const fullStars = Math.floor(rating); // Full stars
						const hasHalfStar = rating % 1 !== 0; // Check if there's a half star

						// Push full stars
						for (let i = 1; i <= fullStars; i++) {
							stars.push(
								<li className={style.item} key={i}>
									<i className={`fi-star ${style.icon}`}></i>
								</li>
							);
						}

						// Push half star if applicable
						if (hasHalfStar) {
							stars.push(
								<li className={style.item}>
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
				<p className={style.price}>${price}</p>
			</div>
		</section>
	);
};

export default ProductItem;
