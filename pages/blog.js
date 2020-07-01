import Layout from "@components/layout/layout";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "@components/date/date";

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
			<section>
				<ul>
					{allPostsData.map(({ id, date, title, updated }) => (
						<li key={id}>
							<Link href="/blog/[id]" as={`/blog/${id}`}>
								<a>{title}</a>
							</Link>
							<br></br>
							<small>
								Created: <Date dateString={date} />
							</small>
							<br></br>
							<small>
								Updated: <Date dateString={updated} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
