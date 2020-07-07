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
