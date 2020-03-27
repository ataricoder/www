import Layout from "@components/layout/layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Batman = props => (
	<Layout>
		<h1>Batman TV Shows</h1>
		<ul>
			{props.shows.map(show => (
				<li key={show.id}>
					<Link href="/batman/[slug]" as={`/batman/${show.id}`}>
						<a>{show.name}</a>
					</Link>
				</li>
			))}
		</ul>
	</Layout>
);

Batman.getInitialProps = async function() {
	const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
	const data = await res.json();

	console.log(`Show data fetched. Count: ${data.length}`);
	//console.log(data.map(entry => entry.show));

	return {
		shows: data.map(entry => entry.show)
	};
};

export default Batman;
