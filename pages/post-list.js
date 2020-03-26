import Page from "@components/page";

import postlist from "../data/blog.json";

export default function PostList() {
	console.log(postlist);
	return (
		<Page>
			<p>Post list Page</p>
		</Page>
	);
}
