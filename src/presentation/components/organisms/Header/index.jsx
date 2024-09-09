"use client";

// -- core
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className="container">
				<h1>Header</h1>
			</div>
		</header>
	);
};

export default Header;
