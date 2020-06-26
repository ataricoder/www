import styles from "./experience.module.css";
import Position from "./position/position";

const Experience = (props) => (
	<div className={styles.content}>
		<a className={styles.title} href={props.href}>
			{props.company}
		</a>
		<b>{props.position}</b>
		<p className={styles.text}>{props.children}</p>
		<p className={styles.date}>{props.date}</p>
	</div>
);

export default Experience;
