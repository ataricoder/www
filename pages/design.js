import Layout from "@components/layout/layout";
import Button from "@components/button/button";
import Code from "@components/code/code";

export default function Design() {
	return (
		<Layout>
			<h1>Button</h1>
			<Button>Button</Button>
			<Code>
				Button can take "href" as an argument to link to another page.
			</Code>
		</Layout>
	);
}
