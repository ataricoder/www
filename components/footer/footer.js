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
				<div className={styles.left_content}>
					Designed and engineered by Daniel Munoz. Last update July
					2020.
				</div>
			</div>
			<div className={styles.right}>
				<a href="https://www.github.com/ataricoder" title="GitHub">
					<GitHub
						className={styles.social}
						size={20}
						strokeWidth={1.25}
						stroke="#444444"
					></GitHub>
				</a>
				<a href="https://www.github.com/ataricoder" title="GitHub">
					<Twitter
						className={styles.social}
						size={20}
						strokeWidth={1.25}
						stroke="#444444"
					></Twitter>
				</a>
				<a href="https://www.github.com/ataricoder" title="GitHub">
					<Dribbble
						className={styles.social}
						size={20}
						strokeWidth={1.25}
						stroke="#444444"
					></Dribbble>
				</a>
			</div>
		</div>
	</div>
);

export default Footer;
