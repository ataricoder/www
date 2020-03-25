import { useRouter } from "next/router";
import Page from "@components/page";

export default function Show() {
	const router = useRouter();

	return (
		<Page>
			<h1>{router.query.slug}</h1>
			<p>This is the show post content.</p>
		</Page>
	);
}
