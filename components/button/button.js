import BootstrapButton from "react-bootstrap/Button";
import styles from "./button.module.css";
import { ArrowRight } from "react-feather";

const Button = (props) => (
	<div>
		<BootstrapButton className={styles.button} size="sm" href={props.href}>
			{props.children}
		</BootstrapButton>
	</div>
);

export default Button;
