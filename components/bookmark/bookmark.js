import styles from "./bookmark.module.css";

const Bookmark = (props) => {
	switch (props.previewBool) {
		case true:
			return (
				<a href={props.href} className={styles.content}>
					<div className={styles.left}>
						<h2 className={styles.title}>{props.title}</h2>
						<p className={styles.description}>
							{props.description}
						</p>
						<p className={styles.href}>{props.href}</p>
					</div>
					<div className={styles.right}>
						<img
							className={styles.preview}
							src={props.preview}
						></img>
					</div>
				</a>
			);
		case false:
			return (
				<a href={props.href} className={styles.content_alt}>
					<div className={styles.left}>
						<h2 className={styles.title}>{props.title}</h2>
						<p className={styles.description}>
							{props.description}
						</p>
						<p className={styles.href}>{props.href}</p>
					</div>
				</a>
			);
	}
};

export default Bookmark;
