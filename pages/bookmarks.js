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
				href="https://brianlovin.com/"
				preview="https://brianlovin.com/static/meta/og-image.png"
			></Bookmark>
		</Layout>
	);
}
