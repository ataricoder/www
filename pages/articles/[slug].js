import { useRouter } from "next/router";
import Layout from "@components/layout/layout";

export default function Post() {
	const router = useRouter();

	return (
		<Layout>
			<h1>{router.query.slug}</h1>
		</Layout>
	);
}
