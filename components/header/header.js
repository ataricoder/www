import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header.module.css";

const Header = () => {
	const router = useRouter();

	const home = router.pathname == "/" ? styles.active : "";
	const about = router.pathname == "/about" ? styles.active : "";
	const bat = router.pathname == "/batman" ? styles.active : "";
	const posts = router.pathname == "/post-list" ? styles.active : "";

	return (
		<nav className={styles.navbar}>
			<div className={styles.group}>
				<Link href="/">
					<a className={styles.link + " " + home} title="Home Page">
						Home
					</a>
				</Link>
				<Link href="/about">
					<a className={styles.link + " " + about} title="About Page">
						About
					</a>
				</Link>
				<Link href="/batman">
					<a className={styles.link + " " + bat} title="Batman Page">
						Batman
					</a>
				</Link>
				<Link href="/post-list">
					<a className={styles.link + " " + posts} title="Posts Page">
						Posts
					</a>
				</Link>
			</div>

			<div className={styles.mobileGroup}>
				<Link href="/">
					<a className={styles.link + " " + home} title="Home Page">
						Home
					</a>
				</Link>
				<Link href="/about">
					<a className={styles.link + " " + about} title="About Page">
						About
					</a>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
