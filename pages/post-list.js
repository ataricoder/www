import Page from "@components/page";
import Markdown from "react-markdown";
import postlist from "../data/blog.json";

export default function PostList() {
	console.log(postlist);
	return (
		<Page>
			<p>Post list Page</p>
			{postlist.map(post => (
				<div>
					<h1>{post.title}</h1>
					<p>
						{post.date} by {post.author}
					</p>
					<Markdown source={post.content} escapeHtml={false} />
				</div>
			))}
		</Page>
	);
}
