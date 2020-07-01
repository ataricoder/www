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
	grid-template-columns: repeat(2, auto);
	grid-template-rows: none;
	width: max-content;
	column-gap: 10px;
	@media (max-width: 991px) {
		grid-template-columns: none;
		grid-template-rows: repeat(2, auto);
	}
`;

export default function Index({ recentPosts }) {
	return (
		<Layout>
			<h1>Hey, I'm Daniel Munoz 👋</h1>
			<p>
				I'm a software engineer and designer. Just graduated from The
				University of Texas at Austin where I learned about Computer
				Science and Health & Society, as well Design Strategies. Did my
				pre-medical studies, but fell in love with computers.{" "}
				<b>Right now I'm looking for opportunities.</b>
			</p>
			<Buttons>
				<Button href={"/about"}>More about me</Button>
				<Button href={"mailto:ataricoder@gmail.com"}>Email me</Button>
			</Buttons>
			<hr></hr>
			<h1>Education</h1>
			<Experience
				href="#"
				company="The University of Texas at Austin"
				date="August 2016 - August 2020"
			>
				<Position title="Computer Science">
					Important Coursework: Data Structures, Graphics and Computer
					Visualization, iOS Mobile Computing, Modern Web
					Applications, Software Engineering
				</Position>
				<Position title="Health and Society">
					Important Coursework: Epidemiology, Data Analysis,
					Statistics and Probability
				</Position>
			</Experience>
			<Experience
				href="#"
				company="The University of Texas at Austin, Extended Campus"
				date="October 2017 - May 2018"
			>
				<Position title="Web Development Coding Bootcamp">
					Concepts Learned: MySQL, React, Express, Node
				</Position>
			</Experience>
			<Experience
				href="#"
				company="General Assembly"
				date="May 2018 - August 2018"
			>
				<Position title="User Experience">
					Concepts Learned: User Flows, MSCW
				</Position>
			</Experience>
			<Experience
				href="#"
				company="Codepath"
				date="January 2019 - May 2019"
			>
				<Position title="iOS Development">
					Concepts Learned: Cocoapods
				</Position>
			</Experience>
			<Experience
				href="#"
				company="Codepath"
				date="June 2020 - August 2020"
			>
				<Position title="Advanced Software Engineering">
					Refresher course on data structures concepts, accompanied
					with practice on software engineering interview questions.
				</Position>
			</Experience>
			<hr></hr>
			<h1>Experience</h1>
			<Experience
				href="#"
				company="Clean 'Em"
				date="June 2018 - August 2020"
			>
				<Position title="iOS Software Engineer">
					Created the API needed on the back-end to interact with the
					iOS application and utilized Cocoapods (Alamofire) to use
					the API. Used JSON web tokens for authentication and session
					control.
				</Position>
				<Position title="Full Stack Software Engineer">
					Created the API needed on the back-end to interact with the
					iOS application and utilized Cocoapods (Alamofire) to use
					the API. Used JSON web tokens for authentication and session
					control.
				</Position>
				<Position title="Platform Software Engineer Intern">
					Created the API needed on the back-end to interact with the
					iOS application and utilized Cocoapods (Alamofire) to use
					the API. Used JSON web tokens for authentication and session
					control.
				</Position>
			</Experience>
			<Experience
				href="#"
				company="The University of Texas at Austin"
				date="June 2018 - June 2020"
			>
				<Position title="IT Technician">
					Helped set up Google student front facing computers
					controlled via Google Admin Console. Helped creating
					websites to provide quicker common link access. Helped
					provision multiple new hardware to employees with all needed
					software and security controls. Helped with ethernet
					connectivity, as well as firewall features and networking.
				</Position>
			</Experience>
			<Experience
				href="#"
				company="Argodesign"
				date="August 2019 - December 2019"
			>
				<Position title="Class Designer"></Position>
			</Experience>
			<Experience
				href="#"
				company="Gardenmania"
				date="June 2017 - August 2017"
			>
				<Position title="Software Engineer Intern"></Position>
			</Experience>
			<Experience
				href="#"
				company="Conroe Regional Medical Center"
				date="June 2016 - August 2016"
			>
				<Position title="Emergency Room Junior Volunteer"></Position>
			</Experience>
			{/* <hr></hr>
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
			<Button href={"/blog"}>Read more</Button> */}
		</Layout>
	);
}
