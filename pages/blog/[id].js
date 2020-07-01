import Layout from "@components/layout/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "@components/date/date";

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export default function Blog({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<h1>{postData.title}</h1>
			<h2>
				Date Created: <Date dateString={postData.date} />
			</h2>
			<h2>
				Date Updated: <Date dateString={postData.updated} />
			</h2>
			<br />
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</Layout>
	);
}
