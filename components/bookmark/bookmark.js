import styles from "./bookmark.module.css";

const Bookmark = (props) => (
	<a href={props.href} className={styles.content}>
		<div className={styles.left}>
			<h2 className={styles.title}>{props.title}</h2>
			<p className={styles.description}>{props.description}</p>
			<p className={styles.href}>{props.href}</p>
		</div>
		<div className={styles.right}>
			<img className={styles.preview} src={props.preview}></img>
		</div>
	</a>
);

export default Bookmark;
