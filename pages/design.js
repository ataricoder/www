import Layout from "@components/layout/layout";
import Button from "@components/button/button";
import Arrow from "@components/arrow/arrow";
import Code from "@components/code/code";

var button = '<Button href="#">Button</Button>';
var arrow = '<Arrow href="#">Arrow</Arrow>';
var code = "<Code>Hello World!</Code>";

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
			<Code>Code goes here</Code>
			<Code>{code}</Code>
			<hr></hr>
		</Layout>
	);
}
