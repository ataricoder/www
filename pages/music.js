import Layout from "@components/layout/layout";

export default function Music() {
	return (
		<Layout>
			<h1>Music Page</h1>
			<h2>June 2020</h2>
			<br></br>
			<iframe
				src="https://open.spotify.com/embed/playlist/6iCo3m5036oll1hsG7D4b4"
				width="100%"
				height="380"
				frameborder="0"
				allowtransparency="true"
				allow="encrypted-media"
			></iframe>
		</Layout>
	);
}
