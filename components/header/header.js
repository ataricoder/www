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
import desktop from "./desktop.module.css";
import mobile from "./mobile.module.css";
// From Media Query for Component Modularization
import { useMediaQuery } from "react-responsive";
// From Feather Icons
import { Menu } from "react-feather";
import { X } from "react-feather";

// MARK: Breakpoint separation using media queries
// Breakpoints: Mobile & Tablets (<991px), Desktops (>992px)
const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 991 });
	return isMobile ? children : null;
};

// MARK: Function component: Header
const Header = () => {
	// MARK: Handle responsive menu
	// Used to enable the menu div
	// Used to toggle between the menu open and closed icons
	const [openMenu, setMenuOpen] = useState(false);
	function handleMenuOpen() {
		setMenuOpen((wasOpened) => !wasOpened);
	}
	// Handle Scrolling Effect using useEffect, add custom class to mobile and desktop modules
	const [scroll, setScrolled] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const scrollTop = window.pageYOffset;
			if (scrollTop > 47) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		});
	});
	const desktop_scrolled = scroll == true ? desktop.scrolled : "";
	const mobile_scrolled = scroll == true ? mobile.scrolled : "";

	// MARK: Handle router and apply custom class with ternary operator
	// useRouter is a hook, therefore can only be called inside the body of a function component
	// applies the class link_active if the router detects the url
	const router = useRouter();
	// Desktop custom active link classes
	const home_desktop = router.pathname == "/" ? desktop.link_active : "";
	const about_desktop =
		router.pathname == "/about" ? desktop.link_active : "";
	const blog_desktop = router.pathname == "/blog" ? desktop.link_active : "";
	const music_desktop =
		router.pathname == "/music" ? desktop.link_active : "";
	const projects_desktop =
		router.pathname == "/projects" ? desktop.link_active : "";
	const bookmarks_desktop =
		router.pathname == "/bookmarks" ? desktop.link_active : "";
	const batman_desktop =
		router.pathname == "/batman" ? desktop.link_active : "";
	const posts_desktop =
		router.pathname == "/post-list" ? desktop.link_active : "";
	// Mobile custom active link classes
	const home_mobile = router.pathname == "/" ? mobile.link_active : "";
	const about_mobile = router.pathname == "/about" ? mobile.link_active : "";
	const blog_mobile = router.pathname == "/blog" ? mobile.link_active : "";
	const music_mobile = router.pathname == "/music" ? mobile.link_active : "";
	const projects_mobile =
		router.pathname == "/projects" ? mobile.link_active : "";
	const bookmarks_mobile =
		router.pathname == "/bookmarks" ? mobile.link_active : "";
	const batman_mobile =
		router.pathname == "/batman" ? mobile.link_active : "";
	const posts_mobile =
		router.pathname == "/post-list" ? mobile.link_active : "";

	// MARK: Render
	return (
		<div>
			{/* MARK: Body */}
			<Desktop>
				<div>
					<Navbar
						collapseOnSelect
						expand="lg"
						variant="dark"
						className={desktop.navbar + " " + desktop_scrolled}
						// Use bsPrefix for custom class
					>
						<Navbar.Brand href="/">👾</Navbar.Brand>
						<Nav className="ml-auto">
							<div className={desktop.link_group}>
								<Nav.Link
									href="/"
									className={
										desktop.link + " " + home_desktop
									}
									title="Home"
								>
									Home
								</Nav.Link>
								<Nav.Link
									href="/about"
									className={
										desktop.link + " " + about_desktop
									}
									title="About"
								>
									About
								</Nav.Link>
								<Nav.Link
									href="/blog"
									className={
										desktop.link + " " + blog_desktop
									}
									title="Blog"
								>
									Blog
								</Nav.Link>
								<Nav.Link
									href="/music"
									className={
										desktop.link + " " + music_desktop
									}
									title="Music"
								>
									Music
								</Nav.Link>
								<Nav.Link
									href="/projects"
									className={
										desktop.link + " " + projects_desktop
									}
									title="Projects"
								>
									Projects
								</Nav.Link>
								<Nav.Link
									href="/bookmarks"
									className={
										desktop.link + " " + bookmarks_desktop
									}
									title="Bookmarks"
								>
									Bookmarks
								</Nav.Link>
							</div>
						</Nav>
					</Navbar>
				</div>
			</Desktop>
			<Mobile>
				<Navbar
					expand="lg"
					fixed="top"
					className={mobile.navbar + " " + mobile_scrolled}
				>
					<Navbar.Brand href="/">👾</Navbar.Brand>
					<Navbar.Toggle className={mobile.toggle_wrapper}>
						{openMenu && (
							<Button
								className={mobile.toggle}
								onClick={handleMenuOpen}
							>
								<X size={24} strokeWidth={3}></X>
							</Button>
						)}
						{/* If state openMenu is false, then show the hamburger menu as the button icon */}
						{!openMenu && (
							<Button
								className={mobile.toggle}
								onClick={handleMenuOpen}
							>
								<Menu size={24} strokeWidth={3}></Menu>
							</Button>
						)}
					</Navbar.Toggle>
					<Navbar.Collapse
						id="basic-navbar-nav"
						className={mobile.dropdown}
					>
						<Nav className="mr-auto">
							<div className={mobile.link_group}>
								<Nav.Link
									href="/"
									className={mobile.link + " " + home_mobile}
								>
									Home
								</Nav.Link>
								<Nav.Link
									href="/about"
									className={mobile.link + " " + about_mobile}
								>
									About
								</Nav.Link>
								<Nav.Link
									href="/blog"
									className={mobile.link + " " + blog_mobile}
								>
									Blog
								</Nav.Link>
								<Nav.Link
									href="/music"
									className={mobile.link + " " + music_mobile}
								>
									Music
								</Nav.Link>
								<Nav.Link
									href="/projects"
									className={
										mobile.link + " " + projects_mobile
									}
								>
									Projects
								</Nav.Link>
								<Nav.Link
									href="/bookmarks"
									className={
										mobile.link + " " + bookmarks_mobile
									}
								>
									Bookmarks
								</Nav.Link>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Mobile>
		</div>
	);
};

export default Header;
