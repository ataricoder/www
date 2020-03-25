import Link from "next/link";
import Page from "@components/page";

const PostLink = props => (
	<li>
		<Link href="/blog/[slug]" as={`/blog/${props.id}`}>
			<a>{props.id}</a>
		</Link>
	</li>
);

export default function Blog() {
	return (
		<Page>
			<h1>My Blog</h1>
			<ul>
				<PostLink id="Hello Next.js" />
				<PostLink id="Learn Next.js is awesome" />
				<PostLink id="Deploy apps with Zeit" />
			</ul>
		</Page>
	);
}
