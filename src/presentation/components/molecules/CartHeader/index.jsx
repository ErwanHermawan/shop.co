// -- core
import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

const CartHeader = (props) => {
	const { cart } = props;
	return (
		<div className={style.cart}>
			<div className={style.head}>
				<h6 className={style.title}>Cart</h6>
			</div>
			<div className={style.body}>
				{cart.map((val, idx) => (
					<div className={style.item} key={`ct-${idx}`}>
						<div className={style.image}>
							<Image
								src={val.image}
								alt={val.name}
								width={64}
								height={64}
								className={style.imageEl}
							/>
						</div>
						<div className={style.text}>
							<h6 className={style.name}>{val.name}</h6>
							<p className={style.price}>${val.price}</p>
						</div>
					</div>
				))}
			</div>
			<div className={style.footer}>
				<Link href="/cart" className={style.link}>
					View All
					<i className="fi-arrow-right"></i>
				</Link>
			</div>
		</div>
	);
};

export default CartHeader;
