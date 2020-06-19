import styles from "./featured.module.css";

const Featured = (props) => (
	<div className={styles.content}>
		<div className={styles.title}>{props.title}</div>
		<div className={styles.text}>{props.children}</div>
	</div>
);

export default Featured;
