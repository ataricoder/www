import Layout from "@components/layout/layout";
import Bookmark from "@components/bookmark/bookmark";
import { Book } from "react-feather";

export default function Bookmarks() {
	return (
		<Layout>
			<h1>Bookmarks</h1>
			<Bookmark
				title="Brian Lovin"
				description="Product designer"
				href="https://brianlovin.com"
				preview="https://brianlovin.com/static/meta/og-image.png"
				previewBool={true}
			></Bookmark>
			<Bookmark
				title="Paco Coursey"
				description="Hi, I'm Paco. Frontend developer and designer, mechanical keyboard enthusiast, practicing minimalist, and trance lover in search of flow."
				href="https://paco.im"
				preview="https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572673557/og-image_budbm8.png"
				previewBool={true}
			></Bookmark>
			<Bookmark
				title="Shu Ding"
				description="Shu’s thoughts"
				href="https://shud.in"
				preview=""
				previewBool={false}
			></Bookmark>
			<Bookmark
				title="Jordan Singer"
				description="I build my ideas"
				href="https://ibuildmyideas.com"
				preview=""
				previewBool={false}
			></Bookmark>
			<Bookmark
				title="Karri Saarinen"
				description="Karri Saarinen is a technically minded designer, speaker and entrepreneur who leads the design systems work at Airbnb."
				href="https://ibuildmyideas.com"
				preview="https://karrisaarinen.com/static/images/ks6.jpg"
				previewBool={true}
			></Bookmark>
			<Bookmark
				title="Evil Rabbit"
				description="Hi, I'm Nicolás Garro, a.k.a Evil Rabbit."
				href="https://evilrabb.it"
				preview="https://dev.evilrabb.it/static/og-image.png"
				previewBool={true}
			></Bookmark>
			<hr></hr>
			<h2>Tools</h2>
			<li>https://title.sh/</li>
			<li>https://static-tweet.now.sh/</li>
			<li>https://metatags.io/</li>
			<hr></hr>
			<h2>Portfolios</h2>
			<li>https://rauchg.com</li>
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
			<li>https://ben.gold</li>
			<li>Products</li>
			<li>https://feyapp.com/</li>
			<li>https://stripe.com/</li>
			<li>https://vercel.com/home</li>
		</Layout>
	);
}
