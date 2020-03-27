import Header from "./header/header";
import Head from "next/head";

const Page = props => (
	<div>
		<Head>
			<title>ataricoder</title>
		</Head>
		<Header />
		{props.children}
	</div>
);

export default Page;
