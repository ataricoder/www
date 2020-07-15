import Layout from "@components/layout/layout";
import Project from "@components/project/project";
import { getSortedProjectsData } from "../lib/projects";
import Link from "next/link";

export async function getStaticProps() {
	const allProjectsData = getSortedProjectsData();
	return {
		props: {
			allProjectsData,
		},
	};
}

export default function Projects({ allProjectsData }) {
	return (
		<Layout>
			<h1>Projects Page</h1>
			<h4>This is some of the things I have worked on in the past.</h4>
			<hr></hr>
			<ul>
				{allProjectsData.map(
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
		</Layout>
	);
}
