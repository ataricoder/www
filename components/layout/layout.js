import Head from "next/head";
import Header from "../header/header";
import styles from "./layout.module.css";

const Layout = props => (
	<div className={styles.layout}>
		<Head>
			<title>ataricoder</title>
		</Head>
		<Header />
		<div className={styles.content}>{props.children}</div>
	</div>
);

export default Layout;
