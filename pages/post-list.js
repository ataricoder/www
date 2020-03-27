import Layout from "@components/layout/layout";
import Markdown from "react-markdown";
import postlist from "../data/blog.json";
import Link from "next/link";

const ArticleLink = ({ article }) => (
	<li>
		<Link href="/articles/[slug]" as={`/articles/${article.id}`}>
			<a>{article.title}</a>
		</Link>
	</li>
);

export default function PostList() {
	// console.log(postlist);
	return (
		<Layout>
			<p>Post list Page</p>
			{postlist.map(post => (
				<ArticleLink key={post.id} article={post} />
			))}
		</Layout>
	);
}
