import Link from "next/link";
import Page from "@components/page";

function getPosts() {
	return [
		{ slug: "hello-nextjs", title: "Hello Next.js" },
		{ slug: "learn-nextjs", title: "Learn Next.js is awesome" },
		{ slug: "deploy-nextjs", title: "Deploy apps with ZEIT" }
	];
}

const PostLink = ({ post }) => (
	<li>
		<Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
			<a>{post.title}</a>
		</Link>
		<style jsx>{`
			li {
				list-style: none;
				margin: 5px 0;
			}

			a {
				text-decoration: none;
				color: blue;
				font-family: "Arial";
			}

			a:hover {
				opacity: 0.6;
			}
		`}</style>
	</li>
);

export default function Blog() {
	return (
		<Page>
			<h1>Post Branch</h1>
			<ul>
				{getPosts().map(post => (
					<PostLink key={post.slug} post={post} />
				))}
			</ul>
			<style jsx>{`
				h1,
				a {
					font-family: "Arial";
				}

				ul {
					padding: 0;
				}

				li {
					list-style: none;
					margin: 5px 0;
				}

				a {
					text-decoration: none;
					color: blue;
				}

				a:hover {
					opacity: 0.6;
				}
			`}</style>
		</Page>
	);
}
