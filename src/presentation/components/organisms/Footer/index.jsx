// -- core
import Link from "next/link";
import Image from "next/image";

// -- components
import Subscribe from "@molecules/Subscribe";

// -- style
import style from "./style.module.scss";

// -- data
import footerData from "./footerData";

const Footer = (props) => {
	return (
		<footer className={style.footer}>
			<div className="container">
				{/* main footer */}
				<div className={style.main}>
					<Subscribe />
					{/* about */}
					<div className={style.about}>
						<Link href={footerData.logo.to} className={style.logo}>
							{/* logo */}
							<Image
								src={footerData.logo.img}
								alt={footerData.logo.alt}
								className={style.logoEl}
							/>
						</Link>
						{/* about text */}
						<p className={style.text}>{footerData.about}</p>
						{/* sosmed */}
						<ul className={style.sosmed}>
							{footerData.sosmed.map((valS, idxS) => (
								<li className={style.sosmedItem} key={`so${idxS}`}>
									<Link href={valS.to} className={style.sosmedLink}>
										<i className={`fi-${valS.icon}`}></i>
									</Link>
								</li>
							))}
						</ul>
					</div>
					{/* menu */}
					<div className={style.menu}>
						{footerData.menu.map((val, idx) => (
							<div className={`${style.column}`} key={`fc-${idx}`}>
								<h5 className={style.title}>{val.title}</h5>
								<ul className={style.nav}>
									{val.list.map((vL, idx) => {
										return (
											<li className={style.navItem} key={`fi-${idx}`}>
												<Link className={style.navLink} href={vL.to}>
													{vL.text}
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						))}
					</div>
				</div>
				{/* bottom footer */}
				<div className={style.bottom}>
					<p className={style.copyright}>{footerData.copyright}</p>
					<ul className={style.payment}>
						{footerData.payment.map((valP, idxP) => (
							<li className={style.paymentItem} key={`pm-${idxP}`}>
								<Link href={valP.to} className={style.paymentLink}>
									<Image
										src={valP.img}
										alt={valP.alt}
										className={style.paymentImage}
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
