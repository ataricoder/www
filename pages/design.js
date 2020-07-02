import Layout from "@components/layout/layout";
import Button from "@components/button/button";
import Arrow from "@components/arrow/arrow";
import Code from "@components/code/code";
import Experience from "@components/experience/experience";
import Position from "@components/experience/position/position";
import Color from "@components/color/color";

var button = '<Button href="#">Button</Button>';
var arrow = '<Arrow href="#">Arrow</Arrow>';
var code = "<Code>Hello World!</Code>";
var experience =
	'<Experience href="#" company="Company" date="Date Range">\n\t<Position title="Position Title">Position Description</Position>\n</Experience>';
var color =
	'<Color\ntitle="Tron Cyan"\ncolor="#68fdfe"\nfont_color="#000000"\noutline="#000000">\n\t#68fdfe\n</Color>';
var typography =
	'font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;';

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

			<h1>Color Block</h1>
			<Color
				title="Tron Cyan"
				color="#68fdfe"
				font_color="#000000"
				outline="#000000"
			>
				#68fdfe
			</Color>
			<Code>{color}</Code>
			<hr></hr>

			<h1>Colors</h1>
			<Color
				title="Tron Cyan"
				color="#68fdfe"
				font_color="#000000"
				outline="#000000"
			>
				#68fdfe
			</Color>
			<Color
				title="Matte Black"
				color="#222222"
				font_color="#ffffff"
				outline="#000000"
			>
				#222222
			</Color>
			<Color
				title="Pure Black"
				color="#000000"
				font_color="#ffffff"
				outline="#ffffff"
			>
				#000000
			</Color>
			<Color
				title="Pure White"
				color="#ffffff"
				font_color="#000000"
				outline="#000000"
			>
				#ffffff
			</Color>
			<hr></hr>
			<h1>Typography</h1>
			<h2>Font Family: Inter</h2>
			<Code>{typography}</Code>
			<hr></hr>
			<h1>Font Style</h1>
			<h2>H1 - Desktop</h2>
			<ul>
				<p>Font Color: #ffffff</p>
				<p>Font Size: 22px</p>
				<p>Font Weight: 600</p>
			</ul>
			<br></br>
			<h2>H1 - Mobile</h2>
			<ul>
				<p>Font Color: #ffffff</p>
				<p>Font Size: 20px</p>
				<p>Font Weight: 600</p>
			</ul>
		</Layout>
	);
}
