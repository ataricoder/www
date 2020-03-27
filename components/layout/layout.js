import Header from "../header/header";

const Layout = props => (
	<div>
		<Header />
		{props.children}
	</div>
);

export default Layout;
