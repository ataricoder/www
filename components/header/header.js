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
	const home = router.pathname == "/" ? styles.link_active : "";
	const about = router.pathname == "/about" ? styles.link_active : "";
	const blog = router.pathname == "/blog" ? styles.link_active : "";
	const music = router.pathname == "/music" ? styles.link_active : "";
	const projects = router.pathname == "/projects" ? styles.link_active : "";
	const bookmarks = router.pathname == "/bookmarks" ? styles.link_active : "";
	const batman = router.pathname == "/batman" ? styles.link_active : "";
	const posts = router.pathname == "/post-list" ? styles.link_active : "";

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
					className={styles.navbar + " " + scrolled}
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
						<Nav className="ml-auto">
							<div className={styles.link_group}>
								<Nav.Link
									href="/"
									className={styles.link + " " + home}
									title="Home"
								>
									Home
								</Nav.Link>
								<Nav.Link
									href="/about"
									className={styles.link + " " + about}
									title="About"
								>
									About
								</Nav.Link>
								<Nav.Link
									href="/blog"
									className={styles.link + " " + blog}
									title="Blog"
								>
									Blog
								</Nav.Link>
								<Nav.Link
									href="/music"
									className={styles.link + " " + music}
									title="Music"
								>
									Music
								</Nav.Link>
								<Nav.Link
									href="/projects"
									className={styles.link + " " + projects}
									title="Projects"
								>
									Projects
								</Nav.Link>
								<Nav.Link
									href="/bookmarks"
									className={styles.link + " " + bookmarks}
									title="Bookmarks"
								>
									Bookmarks
								</Nav.Link>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	);
};

export default Header;
