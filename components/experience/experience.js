import styles from "./experience.module.css";

const Experience = (props) => (
	<div className={styles.content}>
		<a className={styles.title} href={props.href}>
			{props.company}
		</a>
		<div>{props.children}</div>
		<div className={styles.date}>{props.date}</div>
	</div>
);

export default Experience;
