import Layout from "@components/layout/layout";
import Arrow from "@components/arrow/arrow";
import Button from "@components/button/button";

export default function Blog() {
	return (
		<Layout>
			<h1>Hey, I'm Daniel Munoz 👋</h1>
			<br></br>
			<p>
				I'm a software engineer and designer. Just graduated from The
				University of Texas at Austin where I learned about Computer
				Science and Health & Society. Right now I'm looking for
				opportunities.
			</p>
			<Arrow href={"/about"}>More about me</Arrow>
			<Button>Test</Button>
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
