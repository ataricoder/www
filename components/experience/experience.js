import styles from "./experience.module.css";

const Experience = (props) => (
	<div className={styles.content}>
		<a className={styles.title} href={props.href}>
			{props.title}
		</a>
		<p className={styles.text}>{props.children}</p>
		<p className={styles.date}>{props.date}</p>
	</div>
);

export default Experience;
