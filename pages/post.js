import { useRouter } from "next/router";
import Page from "@components/page";

const Page = () => {
	const router = useRouter();

	return (
		<Page>
			<h1>{router.query.title}</h1>
			<p>This is the blog post content.</p>
		</Page>
	);
};

export default Page;
