import Link from "next/link";
import Layout from "@components/layout/layout";

function getPosts() {
	return [
		{ slug: "hello-nextjs", title: "Hello Next.js" },
		{ slug: "learn-nextjs", title: "Learn Next.js is awesome" },
		{ slug: "deploy-nextjs", title: "Deploy apps with ZEIT" },
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
		<Layout>
			<h1>Front Internal Page</h1>
			<button type="button" className="btn btn-primary">
				Primary
			</button>
			<ul>
				{getPosts().map((post) => (
					<PostLink key={post.slug} post={post} />
				))}
			</ul>
			<style jsx>{`
				h1,
				a {
					color: white;
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
		</Layout>
	);
}
