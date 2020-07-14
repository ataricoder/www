import Layout from "@components/layout/layout";
import Arrow from "@components/arrow/arrow";
import Button from "@components/button/button";
import Featured from "@components/featured/featured";
import Experience from "@components/experience/experience";
import Position from "@components/experience/position/position";
import styled from "styled-components";
import { getSortedPostsData } from "../lib/posts";
import { getSortedProjectsData } from "../lib/projects";
import Link from "next/link";
import Date from "@components/date/date";
import Post from "@components/post/post";
import Project from "@components/project/project";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	const recentPosts = allPostsData.sort((a, b) => b - a).slice(0, 3);
	const allProjectsData = getSortedProjectsData();
	const recentProjects = allProjectsData.sort((a, b) => b - a).slice(0, 3);
	return {
		props: {
			recentPosts,
			recentProjects,
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

export default function Index({ recentPosts, recentProjects }) {
	return (
		<Layout>
			<h1>Hey, I'm Daniel Munoz 👋</h1>
			<p>
				I'm a software engineer and designer. Just graduated from The
				University of Texas at Austin where I learned about Computer
				Science and Public Health. Did my pre-medical studies, but fell
				in love with computers.
			</p>
			<p style={{ color: "#68fdfe", fontWeight: "600" }}>
				Right now I'm looking for software engineering opportunities.
			</p>
			<Buttons>
				<Button href={"/about"}>More about me</Button>
				<Button href={"mailto:ataricoder@gmail.com"}>Email me</Button>
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
			<hr></hr>
			<h1>Projects</h1>
			<p>This is some of the things I have worked on in the past.</p>
			<ul>
				{recentProjects.map(
					({ id, title, subtitle, description, image, mobile }) => (
						<ul key={id}>
							<Link href="/projects/[id]" as={`/projects/${id}`}>
								<Project
									title={title}
									subtitle={subtitle}
									description={description}
									image={image}
									mobile={mobile}
									href={`/projects/${id}`}
								></Project>
							</Link>
						</ul>
					)
				)}
			</ul>
			<Button href={"/projects"}>More projects</Button>
		</Layout>
	);
}
