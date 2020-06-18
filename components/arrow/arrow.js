import Link from "next/link";
import styles from "./arrow.module.css";
import Head from "next/head";
import { ArrowRight } from "react-feather";

const Arrow = (props) => (
	<div>
		<Head>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
				integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
				crossOrigin="anonymous"
			></link>
		</Head>
		<div>
			<a className={styles.button} href={props.href}>
				{props.children}
				<ArrowRight
					className={styles.arrow}
					size={16}
					strokeWidth={4}
				/>
			</a>
		</div>
	</div>
);

export default Arrow;
