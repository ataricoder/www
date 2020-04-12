import Link from "next/link";
import styles from "./footer.module.css";
import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Footer = () => (
	<div>
		<Head>
			<title>ataricoder</title>
			<link rel="shortcut icon" href="/favicon.png" />
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
				integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
				crossOrigin="anonymous"
			></link>
		</Head>
		<div className="nav-wrapper">
			<Navbar bg="primary" variant="dark">
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2"
					/>
					<Button variant="outline-light">Search</Button>
				</Form>
			</Navbar>
		</div>
	</div>
);

export default Footer;
