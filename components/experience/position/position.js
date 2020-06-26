import styles from "@components/experience/position/position.module.css";

const Position = (props) => (
	<div className={styles.content}>
		<div className={styles.title}>{props.title}</div>
		<p className={styles.text}>{props.children}</p>
	</div>
);

export default Position;
