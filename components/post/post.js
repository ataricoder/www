import styled from "./post.module.css";
import Link from "next/link";
import Date from "@components/date/date";

const Post = (props) => (
	<div className={styled.content}>
		<Link href={props.href} as={props.as}>
			<a className={styled.title}>{props.title}</a>
		</Link>
		<p className={styled.preview}>{props.children}</p>
		<div className={styled.date}>
			<Date dateString={props.date} />
		</div>
	</div>
);

export default Post;
