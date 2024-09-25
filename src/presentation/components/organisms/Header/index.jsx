"use client";

// -- core
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// -- atoms
import FormControl from "@atoms/FormControl";
import Logo from "@atoms/Logo";

// -- molecules
import CartHeader from "@molecules/CartHeader";

// -- style
import style from "./style.module.scss";

const Header = (props) => {
	const { promo, menu, cart } = props;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<header className={style.header}>
			<div className={style.promo}>
				<div className="container">
					<p className={style.promoText}>
						{promo.text}
						<Link href={promo.button.to} className={style.promoButton}>
							{promo.button.text}
						</Link>
					</p>
				</div>
			</div>
			<div className={style.main}>
				<div className="container">
					<div className={style.wrapper}>
						{/* logo */}
						<Logo />
						{/* navigation */}
						<ul className={style.nav}>
							{menu.map((val, idx) => (
								<li className={style.item} key={`mn-${idx}`}>
									<Link href={val.to} className={style.link}>
										{val.text}
										{val.dropdown && <i className="fi-chevron-down"></i>}
									</Link>
								</li>
							))}
						</ul>
						{/* search */}
						<div className={style.search}>
							<FormControl
								placeholder="Search for products..."
								icon="search"
								color="grey"
							/>
						</div>
						{/* action */}
						<div className={style.act}>
							<div
								className={style.actList}
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							>
								<Link href="/cart" className={style.actLink}>
									<i className={`fi-cart`}></i>
									<span className={style.actBadge}>10</span>
									<div className={style.cart}>
										{isHovered && <CartHeader cart={cart} />}
									</div>
								</Link>
							</div>
							<div>
								<Link href="/profile" className={style.actLink}>
									<i className={`fi-user`}></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
