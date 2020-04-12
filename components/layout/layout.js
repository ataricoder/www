import Head from "next/head";
import Header from "../header/header";
import styles from "./layout.module.css";
import Footer from "../footer/footer";
import Header2 from "../header_var/header_var";

const Layout = (props) => (
	<div className={styles.layout}>
		<Head>
			<title>ataricoder</title>
			<link rel="shortcut icon" href="/favicon.png" />
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
				integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
				crossOrigin="anonymous"
			></link>
		</Head>
		<Header2 />
		<div className={styles.content}>{props.children}</div>
		<Footer />
	</div>
);

export default Layout;
