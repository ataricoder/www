import Head from "next/head";
import styles from "./layout.module.css";
import Footer from "@components/footer/footer";
import Header from "@components/header/header";
import Spacer from "@components/spacer/spacer";
const Layout = (props) => (
	<div className={styles.layout}>
		<Head>
			<title>Daniel Munoz</title>
			{/* Primary Meta Tags */}
			<meta name="title" content="Daniel Munoz"></meta>
			<meta
				name="description"
				content="I'm a software engineer and designer."
			></meta>
			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website"></meta>
			<meta property="og:url" content="https://ataricoder.com/"></meta>
			<meta property="og:title" content="Daniel Munoz"></meta>
			<meta
				property="og:description"
				content="I'm a software engineer and designer."
			></meta>
			<meta
				property="og:image"
				content="https://ataricoder.com/meta_image.png"
			></meta>
			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image"></meta>
			<meta
				property="twitter:url"
				content="https://ataricoder.com/"
			></meta>
			<meta property="twitter:title" content="Daniel Munoz"></meta>
			<meta
				property="twitter:description"
				content="I'm a software engineer and designer."
			></meta>
			<meta
				property="twitter:image"
				content="https://ataricoder.com/meta_image.png"
			></meta>
			{/* Favicon */}
			<link rel="shortcut icon" href="/favicon.png" />
			<link
				rel="preload"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
				integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
				crossOrigin="anonymous"
				onLoad="this.onload=null;this.rel='stylesheet'"
			></link>
		</Head>
		<Header />
		<div className={styles.content}>{props.children}</div>
		<Footer />
		<Spacer />
	</div>
);

export default Layout;
