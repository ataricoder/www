import Link from "next/link";
import styles from "./header.module.css";

const linkStyle = {
	marginRight: 15
};

const Header = () => (
	<div className={styles.navbar}>
		<Link href="/">
			<a style={linkStyle} title="Home Page">
				Home
			</a>
		</Link>
		<Link href="/about">
			<a style={linkStyle} title="About Page">
				About
			</a>
		</Link>
		<Link href="/batman">
			<a style={linkStyle} title="Batman Page">
				Batman
			</a>
		</Link>
	</div>
);

export default Header;
