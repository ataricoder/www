import Link from "next/link";
import styles from "./footer.module.css";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
		<div className={styles.cardWrapper}>
			I really need to get styling this
		</div>
	</div>
);

export default Footer;
