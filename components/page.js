import Header from "./header/header";
import Head from "next/head";

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: "1px solid #DDD"
};

const Page = props => (
	<div style={layoutStyle}>
		<Head>
			<title>ataricoder</title>
		</Head>
		<Header />
		{props.children}
	</div>
);

export default Page;
