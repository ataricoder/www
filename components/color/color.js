import styled from "./color.module.css";

const Color = (props) => (
	<div
		className={styled.content}
		style={{
			backgroundColor: props.color,
			color: props.font_color,
			borderColor: props.outline,
		}}
	>
		<div className={styled.block}>
			<div>{props.title}</div>
			<div>{props.children}</div>
		</div>
	</div>
);

export default Color;
