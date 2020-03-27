import Head from "next/head";
import Header from "../header/header";
import styles from "./layout.module.css";

const Layout = props => (
	<div className={styles.wrapper}>
		<Head>
			<title>ataricoder</title>
		</Head>
		<Header />
		{props.children}
	</div>
);

export default Layout;
