import styles from "@components/experience/position/position.module.css";

const Position = (props) => (
	<div className={styles.content}>
		<div className={styles.title}>{props.title}</div>
		<div>{props.children}</div>
	</div>
);

export default Position;
