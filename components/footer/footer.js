import Link from "next/link";
import styles from "./footer.module.css";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import { GitHub, Twitter, Dribbble } from "react-feather";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => (
	<div>
		<Head>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
				integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
				crossOrigin="anonymous"
			></link>
		</Head>
		<div className={styles.separator}></div>
		<div className={styles.content}>
			<div className={styles.left}>
				<Navbar.Brand href="/" className={styles.brand}>
					👾 <div className={styles.brand_label}>ataricoder 2020</div>
				</Navbar.Brand>
				<a href="https://www.github.com/ataricoder" title="GitHub">
					<GitHub
						size={20}
						strokeWidth={1.25}
						stroke="#FFFFFF"
					></GitHub>
				</a>
				<Twitter
					size={20}
					strokeWidth={1.25}
					stroke="#FFFFFF"
				></Twitter>
				<Dribbble
					size={20}
					strokeWidth={1.25}
					stroke="#FFFFFF"
				></Dribbble>
			</div>
			<div className={styles.right}></div>
		</div>
	</div>
);

export default Footer;
