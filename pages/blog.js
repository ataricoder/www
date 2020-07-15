import Layout from "@components/layout/layout";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "@components/date/date";
import Post from "@components/post/post";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Blog({ allPostsData }) {
	return (
		<Layout>
			<h1>Blog</h1>
			<h4>
				This is where I write down ideas, opinions and more. Usually
				about computer science, mathematics, medicine and design.
			</h4>
			<hr></hr>
			<ul>
				{allPostsData.map(({ id, date, title, updated, preview }) => (
					<ul key={id}>
						<Link href="/blog/[id]" as={`/blog/${id}`}>
							<Post
								href="/blog/[id]"
								as={`/blog/${id}`}
								title={title}
								date={date}
								updated={updated}
							>
								{preview}
							</Post>
						</Link>
					</ul>
				))}
			</ul>
		</Layout>
	);
}
