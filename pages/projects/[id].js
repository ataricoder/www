import Layout from "@components/layout/layout";
import { getAllProjectsIds, getProjectData } from "../../lib/projects";
import Head from "next/head";

export async function getStaticPaths() {
	const paths = getAllProjectsIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getProjectData(params.id);
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
			<br />
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</Layout>
	);
}
