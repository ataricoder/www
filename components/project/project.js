import styles from "./project.module.css";

const Project = (props) => {
	switch (props.mobile) {
		case true:
			return (
				<div className={styles.content}>
					<div className={styles.left}>
						<h2>{props.title}</h2>
						<p className={styles.subtitle}>{props.subtitle}</p>
						<p className={styles.description}>
							{props.description}
						</p>
					</div>
					<div className={styles.right}>
						<img
							className={styles.mobile_image}
							src={props.image}
						></img>
					</div>
				</div>
			);
		case false:
			return (
				<div className={styles.content}>
					<div className={styles.left}>
						<h2>{props.title}</h2>
						<p className={styles.subtitle}>{props.subtitle}</p>
						<p className={styles.description}>
							{props.description}
						</p>
					</div>
					<div className={styles.right}>
						<img
							className={styles.desktop_image}
							src={props.image}
						></img>
					</div>
				</div>
			);
	}
};

export default Project;
