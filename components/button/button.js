import BootstrapButton from "react-bootstrap/Button";
import styles from "./button.module.css";

const Button = (props) => (
	<div>
		<BootstrapButton className={styles.button}>
			{props.children}
		</BootstrapButton>
	</div>
);

export default Button;
