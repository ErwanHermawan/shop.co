"use client";

// -- core
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// -- atoms
import FormControl from "@atoms/FormControl";

// -- style
import style from "./style.module.scss";

// -- data
import headerData from "./headerData";

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={style.promo}>
				<div className="container">
					<p className={style.promoText}>
						{headerData.promo.text}
						<Link
							href={headerData.promo.button.to}
							className={style.promoButton}
						>
							{headerData.promo.button.text}
						</Link>
					</p>
				</div>
			</div>
			<div className={style.main}>
				<div className="container">
					<div className={style.wrapper}>
						<Link href={headerData.logo.to} className={style.logo}>
							<Image src={headerData.logo.img} alt={headerData.logo.alt} />
						</Link>
						<ul className={style.nav}>
							{headerData.menu.map((val, idx) => (
								<li className={style.item} key={`mn-${idx}`}>
									<Link href={val.to} className={style.link}>
										{val.text}
										{val.dropdown && <i className="fi-chevron-down"></i>}
									</Link>
								</li>
							))}
						</ul>
						<div className={style.search}>
							<FormControl
								placeholder="Search for products..."
								icon="search"
								color="grey"
							/>
						</div>
						<div className={style.action}>
							<button className={style.button}>
								<i className={`fi-cart`}></i>
							</button>
							<button className={style.button}>
								<i className={`fi-user`}></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
