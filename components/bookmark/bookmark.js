import styles from "./bookmark.module.css";

const Bookmark = (props) => (
	<div className={styles.content}>
		<div className={styles.left}>
			<h2>{props.title}</h2>
		</div>
		<div className={styles.right}>
			<img className={styles.preview} src={props.preview}></img>
		</div>
	</div>
);

export default Bookmark;
