import Layout from "@components/layout/layout";
import Arrow from "@components/arrow/arrow";
import Button from "@components/button/button";
import Featured from "@components/featured/featured";
import Experience from "@components/experience/experience";
import Position from "@components/experience/position/position";
import styled from "styled-components";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "@components/date/date";
import Post from "@components/post/post";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	const recentPosts = allPostsData.sort((a, b) => b - a).slice(0, 3);
	return {
		props: {
			recentPosts,
		},
	};
}

const Buttons = styled.div`
	display: grid;
	grid-template-rows: repeat(2, auto);
	grid-template-rows: none;
	width: max-content;
	column-gap: 10px;
`;

const Call = styled.p`
	color: #68fdfe !important;
	font-weight: 600;
`;

export default function Index({ recentPosts }) {
	return (
		<Layout>
			<h1>Hey, I'm Daniel Munoz 👋</h1>
			<p>
				I'm a software engineer and designer. Just graduated from The
				University of Texas at Austin where I learned about Computer
				Science and Public Health. Did my pre-medical studies, but fell
				in love with computers.
			</p>
			<Call>
				Right now I'm looking for software engineering opportunities.
			</Call>
			<Buttons>
				<Button href={"/about"}>More about me</Button>
				<Button href={"mailto:ataricoder@hey.com"}>Email me</Button>
			</Buttons>
			<hr></hr>
			<h1>Blog</h1>
			<p>
				This is where I write down ideas, opinions and more. Usually
				about computer science, mathematics, medicine and design.
			</p>
			<ul>
				{recentPosts.map(({ id, date, title, updated, preview }) => (
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
			<Button href={"/blog"}>Read more</Button>
		</Layout>
	);
}
