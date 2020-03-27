import { useRouter } from "next/router";
import Layout from "@components/layout/layout";
import Markdown from "react-markdown";

const input = "# This is a header\n\nAnd this is a paragraph";

export default function Post() {
	const router = useRouter();

	return (
		<Layout>
			<h1>{router.query.slug}</h1>
			<div className="markdown">
				<Markdown source={input} />
			</div>
			<style jsx>{`
				.markdown {
					color: blue;
					font-family: "Arial";
				}
			`}</style>
		</Layout>
	);
}
