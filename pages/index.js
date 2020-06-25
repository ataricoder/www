import Layout from "@components/layout/layout";
import Arrow from "@components/arrow/arrow";
import Button from "@components/button/button";
import Featured from "@components/featured/featured";
import Experience from "@components/experience/experience";

export default function Blog() {
	return (
		<Layout>
			<h1>Hey, I'm Daniel Munoz 👋</h1>
			<br></br>
			<p>
				I'm a software engineer and designer. Just graduated from The
				University of Texas at Austin where I learned about Computer
				Science and Health & Society, as well Design Strategies. Did my
				pre-medical studies, but fell in love with computers.{" "}
				<b>Right now I'm looking for opportunities.</b>
			</p>
			<Button href={"/about"}>More about me</Button>
			<br></br>
			<h2>Experience</h2>
			<Experience
				href="#"
				title="iOS Software Engineer at Clean 'Em"
				date="June 2020 - August 2020"
			>
				Created the API needed on the back-end to interact with the iOS
				application and utilized Cocoapods (Alamofire) to use the API.
				Used JSON web tokens for authentication and session control.
			</Experience>
			<li>
				iOS Software Engineer Intern at Clean 'Em, June 2020 - August
				2020
			</li>
			<li>
				Full Stack Software Engineer at Clean 'Em, January 2020 - June
				2020
			</li>
			<li>
				Front-end Software Engineer at Clean 'Em, August 2018 - January
				2020
			</li>
			<li>
				Platform Software Engineer Intern at Clean 'Em, June 2018 -
				August 2018
			</li>
			<li>
				IT Technician at The University of Texas at Austin, June 2018 -
				August 2020
			</li>
			<li>
				Software Engineer Intern at Gardenmania, June 2017 - August 2017
			</li>
			<li>
				Emergency Room Triage Junior Volunteer at Conroe Regional
				Medical Center, June 2016 - August 2016
			</li>
			<li>
				Computer Science at The University of Texas at Austin, August
				2016 - August 2020
			</li>
			<li>
				Health and Society at The University of Texas at Austin, August
				2016 - August 2020
			</li>
			<li>
				Full Stack Coding Bootcamp at The University of Texas at Austin
				Extended Campus, October 2017 - May 2018
			</li>
			<li>User Experience at General Assembly, May 2018 - August 2018</li>
			<li>iOS Development at Codepath, January 2019 - May 2019</li>
			<li>
				Advanced Software Engineering at Codepath, June 2020 - August
				2020
			</li>
			<li>Class Designer at Argodesign, August 2019 - December 2019</li>
			<br></br>
			<h2>Engineering</h2>
			<h2>Design</h2>
			<h2>Socials</h2>
			<h2>Blog</h2>
			<p>
				This is where I write down ideas, opinions and more. Usually
				about computer science, mathematics, medicine and design.
			</p>
			<p>
				Ut ut ex fermentum, hendrerit dui in, pretium arcu. Fusce arcu
				quam, tristique eget nulla in, lacinia interdum libero. Quisque
				augue libero, feugiat finibus lorem sit amet, fringilla faucibus
				dolor. Fusce quis imperdiet massa. Phasellus massa justo, varius
				in eros a, laoreet posuere ipsum. Etiam nec metus quis velit
				lobortis porttitor. Nam rhoncus egestas sem vitae tempus. Etiam
				efficitur scelerisque augue, vitae rhoncus ipsum commodo
				consectetur. Nullam laoreet turpis et est hendrerit hendrerit.
				Integer viverra tellus sit amet felis faucibus pulvinar. Integer
				fringilla dapibus turpis, id pellentesque sapien aliquam non.
				Cras at cursus lorem, et sodales ante. Nam varius magna eget
				ipsum ullamcorper, ac finibus nulla fermentum. Aliquam eget
				vehicula lorem, nec auctor dui.
			</p>
			<ul>
				<a href="/about">
					Vestibulum volutpat elit eget rhoncus rhoncus.
				</a>
			</ul>
			<ul>
				<a href="/about">
					Morbi hendrerit sapien eu lectus dictum scelerisque.
				</a>
			</ul>
			<ul>
				<a href="/about">
					Quisque sed magna porta, lobortis est molestie, lobortis
					nisi.
				</a>
			</ul>
		</Layout>
	);
}
