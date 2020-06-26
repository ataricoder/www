import Layout from "@components/layout/layout";
import Button from "@components/button/button";
import Arrow from "@components/arrow/arrow";
import Code from "@components/code/code";
import Experience from "@components/experience/experience";
import Position from "@components/experience/position/position";

var button = '<Button href="#">Button</Button>';
var arrow = '<Arrow href="#">Arrow</Arrow>';
var code = "<Code>Hello World!</Code>";
var experience =
	'<Experience href="#" company="Company" date="Date Range">\n\t<Position title="Position Title">Position Description</Position>\n</Experience>';

export default function Design() {
	return (
		<Layout>
			<h1>Design Guide</h1>
			<br></br>

			<h1>Button</h1>
			<Button href="#">Button</Button>
			<Code>{button}</Code>
			<hr></hr>

			<h1>Arrow</h1>
			<Arrow href="#">Arrow</Arrow>
			<Code>{arrow}</Code>
			<hr></hr>

			<h1>Code</h1>
			<Code>Hello World!</Code>
			<Code>{code}</Code>
			<hr></hr>

			<h1>Experience</h1>
			<Experience href="#" company="Company" date="Date Range">
				<Position title="Position Title">Position Description</Position>
			</Experience>
			<Code>{experience}</Code>
			<hr></hr>
		</Layout>
	);
}
