import Layout from "@components/layout/layout";
import fetch from "isomorphic-unfetch";

const Show = props => (
	<Layout>
		<h1>{props.show.name}</h1>
		<p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
		{props.show.image ? <img src={props.show.image.medium} /> : null}
	</Layout>
);

Show.getInitialProps = async function(context) {
	// const { id } = context.query;

	// Get the id of the show from the query as an object
	const id = context.query;
	console.log(id.slug);

	// Fetch the URL from api and get the response as a JSON object
	// const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const res = await fetch(`https://api.tvmaze.com/shows/` + id.slug);
	const show = await res.json();
	console.log(show);

	console.log(`Fetched show: ${show.name}`);

	return { show };
};

export default Show;
