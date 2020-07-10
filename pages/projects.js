import Layout from "@components/layout/layout";
import Project from "@components/project/project";

export default function Projects() {
	return (
		<Layout>
			<h1>Projects Page</h1>
			<Project
				title="Stripe"
				subtitle="Web Application"
				description="Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online."
				image="/stripe_sample.png"
				mobile={false}
			></Project>
			<Project
				title="Cash App"
				subtitle="iOS Application"
				description="Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online."
				image="/ecommerce_sample.png"
				mobile={true}
			></Project>
		</Layout>
	);
}
