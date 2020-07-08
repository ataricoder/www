import Layout from "@components/layout/layout";
import Bookmark from "@components/bookmark/bookmark";

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
			<Bookmark
				title="Guillermo Rauch"
				description="Guillermo Rauch's blog"
				href="https://rauchg.com"
				preview=""
				previewBool={false}
			></Bookmark>
			<Bookmark
				title="Alex MacCaw"
				description="JavaScript programmer, O'Reilly author, open source hacker"
				href="http://alexmaccaw.com"
				preview=""
				previewBool={false}
			></Bookmark>
			<Bookmark
				title="Daniel Destefanis"
				description="Product designer and developer living in San Francisco, working at Discord."
				href="https://danieldoes.design"
				preview=""
				previewBool={false}
			></Bookmark>
			<Bookmark
				title="Ryo Lu"
				description=""
				href="https://ryo.lu"
				preview=""
				previewBool={false}
			></Bookmark>
			<Bookmark
				title="Amanda Pinsker"
				description="Amanda Pinsker is a product and interaction designer who cares about making her work smart, elegant, and simple by design."
				href="https://amandapinsker.com"
				preview=""
				previewBool={false}
			></Bookmark>
			<Bookmark
				title="Andy Matuschak"
				description=""
				href="https://andymatuschak.org"
				preview=""
				previewBool={false}
			></Bookmark>
			<Bookmark
				title="Dustin Curtis"
				description="Dustin Curtis"
				href="https://dustincurtis.com"
				preview=""
				previewBool={false}
			></Bookmark>
			<Bookmark
				title="S. J. Zhang"
				description="A Product Designer and technologist. Currently building a design history catalog / graphic editor Form2Shape."
				href="https://www.s-j-zhang.com"
				preview="https://uploads-ssl.webflow.com/5d06cf125b8916fdaac3bdb5/5e24ef9f5cbbd620e223c2ac_openGraph2.png"
				previewBool={true}
			></Bookmark>
			<hr></hr>
			<h2>Tools</h2>
			<li>https://title.sh/</li>
			<li>https://static-tweet.now.sh/</li>
			<li>https://metatags.io/</li>
			<hr></hr>
			<h2>Portfolios</h2>
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
