import Link from "next/link";
import styles from "./footer.module.css";
import Head from "next/head";
import Button from "react-bootstrap/Button";

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
				<div>Copyright and Year</div>
				<div>Github</div>
				<div>Twitter</div>
				<div>Dribble</div>
			</div>
			<div className={styles.right}>
				<div>About</div>
				<div>Projects</div>
				<div>Blog</div>
			</div>
		</div>
	</div>
);

export default Footer;
