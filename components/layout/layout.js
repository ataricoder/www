import Head from "next/head";
import styles from "./layout.module.css";
import Footer from "@components/footer/footer";
import Header from "@components/header/header";
import Spacer from "@components/spacer/spacer";
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
		<Spacer />
		<Header />
		<div className={styles.content}>{props.children}</div>
		<Footer />
		<Spacer />
	</div>
);

export default Layout;
