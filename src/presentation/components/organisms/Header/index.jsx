"use client";

// -- core
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

// -- atoms
import FormControl from "@atoms/FormControl";
import Logo from "@atoms/Logo";

// -- molecules
import CartHeader from "@molecules/CartHeader";

// -- style
import style from "./style.module.scss";

const Header = (props) => {
	const { promo, menu, cart } = props;
	const [isMenuHovered, setIsMenuHovered] = useState(null);
	const [isCartHovered, setIsCartHovered] = useState(false);
	let cartTimeout;

	const handleMouseEnterCart = () => {
		clearTimeout(cartTimeout);
		setIsCartHovered(true);
	};

	const handleMouseLeaveCart = () => {
		cartTimeout = setTimeout(() => setIsCartHovered(false), 300);
	};

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
						<div className={style.left}>
							<button type="button" className={style.burgerMenu}>
								<span className={style.burgerMenuBar}></span>
								<span className={style.burgerMenuBar}></span>
								<span className={style.burgerMenuBar}></span>
							</button>
							{/* logo */}
							<Logo />
						</div>
						{/* navigation */}
						<ul className={style.nav}>
							{menu.map((val, idx) => (
								<li
									className={style.item}
									key={`mn-${idx}`}
									onMouseEnter={() => val.category && setIsMenuHovered(idx)}
									onMouseLeave={() => setIsMenuHovered(null)}
								>
									{/* Main link */}
									<Link href={val.to} className={style.link}>
										{val.text}
										{val.dropdown && <i className="fi-chevron-down"></i>}
									</Link>
									{/* Dropdown menu */}
									{isMenuHovered === idx && val.category && (
										<div className={style.category}>
											{val.category.map((valC, idxC) => (
												<>
													<div
														className={style.categoryWrapper}
														key={`ctl-${idxC}`}
													>
														<h6 className={style.categoryTitle}>
															<Link
																className={style.categoryLink}
																href={valC.to}
															>
																{valC.name}
															</Link>
														</h6>
														<ul className={style.categoryList}>
															{valC.list.map((valCL, idxCL) => (
																<li
																	className={style.categoryItem}
																	key={`ctl-${idxCL}`}
																>
																	<Link
																		href={valCL.to}
																		className={style.categoryLink}
																	>
																		{valCL.name}
																	</Link>
																</li>
															))}
														</ul>
													</div>
												</>
											))}
										</div>
									)}
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
								onMouseEnter={handleMouseEnterCart}
								onMouseLeave={handleMouseLeaveCart}
							>
								<Link href="/cart" className={style.actLink}>
									<i className={`fi-cart`}></i>
									<span className={style.actBadge}>10</span>
									<div className={style.cart}>
										{isCartHovered && <CartHeader cart={cart} />}
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
