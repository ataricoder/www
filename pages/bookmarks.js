import Layout from "@components/layout/layout";
import Bookmark from "@components/bookmark/bookmark";
import { Book } from "react-feather";

export default function Bookmarks() {
	return (
		<Layout>
			<h1>Bookmarks Page</h1>
			<h2>Tools</h2>
			<li>https://title.sh/</li>
			<li>https://static-tweet.now.sh/</li>
			<li>https://metatags.io/</li>
			<hr></hr>
			<h2>Inspiration</h2>
			<li>https://ibuildmyideas.com/</li>
			<li>https://brianlovin.com/</li>
			<li>https://paco.im/</li>
			<li>https://shud.in/</li>
			<li>https://karrisaarinen.com/</li>
			<li>https://evilrabb.it</li>
			<li>https://racuhg.com</li>
			<li>https://alexmaccaw.com</li>
			<li>https://danieldoes.design</li>
			<li>https://ryo.lu</li>
			<li>https://amandapinsker.com</li>
			<li>https://andymatuschak.org</li>
			<li>https://dustincurtis.com</li>
			<li>https://www.s-j-zhang.com</li>
			<li>https://www.kerem.co</li>
			<li>https://leo.im</li>
			<li>https://chibicode.com</li>
			<li>https://www.hyumankind.com</li>
			<li>https://www.arun.is</li>
			<li>https://sarahdayan.dev</li>
			<li>https://rsms.me</li>
			<li>http://zcole.me</li>
			<Bookmark
				title="Brian Lovin"
				description="Product designer"
				href="https://brianlovin.com"
				preview="https://brianlovin.com/static/meta/og-image.png"
			></Bookmark>
			<Bookmark
				title="Paco Coursey"
				description="Hi, I'm Paco. Frontend developer and designer, mechanical keyboard enthusiast, practicing minimalist, and trance lover in search of flow."
				href="https://paco.im"
				preview="https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572673557/og-image_budbm8.png"
			></Bookmark>
		</Layout>
	);
}
