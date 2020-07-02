import Layout from "@components/layout/layout";
import Experience from "@components/experience/experience";
import Position from "@components/experience/position/position";
import styled from "styled-components";

const Image = styled.img`
	border-radius: 8px;
`;

export default function About() {
	return (
		<Layout>
			<h1>About Page</h1>
			<Image width="100%" height="auto" src="/www_about.jpg"></Image>
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
		</Layout>
	);
}
