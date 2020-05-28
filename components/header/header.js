// From React
import { useState, useEffect } from "react";
// From Next.js
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
// From React Bootstrap
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// From CSS Modules
import styles from "./header.module.css";

// MARK: Function component: Header
const Header = () => {
	// Handle Scrolling Effect using useEffect, add custom class to mobile and desktop modules
	const [scroll, setScrolled] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const scrollTop = window.pageYOffset;
			if (scrollTop > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		});
	});
	const scrolled = scroll == true ? styles.scrolled : "";

	// MARK: Handle router and apply custom class with ternary operator
	// useRouter is a hook, therefore can only be called inside the body of a function component
	// applies the class link_active if the router detects the url
	const router = useRouter();
	// Desktop custom active link classes
	const batman = router.pathname == "/batman" ? styles.link_active : "";
	const about = router.pathname == "/about" ? styles.link_active : "";
	const posts = router.pathname == "/post-list" ? desktop.link_active : "";

	// MARK: Render
	return (
		<div>
			{/* MARK: Head */}
			<Head>
				{/* Bootstrap 4.4.1*/}
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
					integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
					crossOrigin="anonymous"
				></link>
			</Head>
			{/* MARK: Body */}
			<div>
				<Navbar
					collapseOnSelect
					expand="lg"
					variant="dark"
					fixed="top"
					className={styles.testNav + " " + scrolled}
					// Use bsPrefix for custom class
				>
					<Navbar.Brand href="/">👾</Navbar.Brand>
					<Navbar.Toggle
						className={styles.navWrapper}
						aria-controls="responsive-navbar-nav"
					>
						<Button variant="primary">Primary</Button>
					</Navbar.Toggle>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link
								href="/about"
								className={styles.link + " " + about}
							>
								About
							</Nav.Link>
							<Nav.Link
								href="/batman"
								className={styles.link + " " + batman}
							>
								Batman
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="/post-list">Posts</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Dank memes
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	);
};

export default Header;
