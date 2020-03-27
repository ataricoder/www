import Link from "next/link";
import styles from "./header.module.css";

const Header = () => (
	<nav className={styles.navbar}>
		<div className={styles.group}>
			<div></div>
			<Link href="/">
				<a className={styles.link} title="Home Page">
					Home
				</a>
			</Link>
			<Link href="/about">
				<a className={styles.link} title="About Page">
					About
				</a>
			</Link>
			<Link href="/batman">
				<a className={styles.link} title="Batman Page">
					Batman
				</a>
			</Link>
			<Link href="/post-list">
				<a className={styles.link} title="Posts Page">
					Posts
				</a>
			</Link>
			<div></div>
		</div>
	</nav>
);

export default Header;
