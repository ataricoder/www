import BootstrapButton from "react-bootstrap/Button";
import styles from "./button.module.css";
import { ArrowRight } from "react-feather";

const Button = (props) => (
	<div>
		<BootstrapButton className={styles.button} size="sm" href={props.href}>
			<div className={styles.content}>
				{props.children}
				<ArrowRight
					className={styles.arrow}
					size={16}
					strokeWidth={4}
				/>
			</div>
		</BootstrapButton>
	</div>
);

export default Button;
