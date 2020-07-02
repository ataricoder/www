import Layout from "@components/layout/layout";
import styled from "styled-components";

const Playlist = styled.iframe`
	border-radius: 8px !important;
	border-color: #000000 !important;
	border-width: 0px !important;
`;

export default function Music() {
	return (
		<Layout>
			<h1>Music Page</h1>
			<h2>June 2020</h2>
			<br></br>
			<Playlist
				src="https://open.spotify.com/embed/playlist/6iCo3m5036oll1hsG7D4b4"
				width="100%"
				height="380"
				frameborder="0"
				allowtransparency="true"
				allow="encrypted-media"
			></Playlist>
		</Layout>
	);
}
