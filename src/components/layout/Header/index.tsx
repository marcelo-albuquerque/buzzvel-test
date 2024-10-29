"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import Logo from "@/components/global/Logo";
import Button from "@/components/global/Button";

import { ArrowRight, Headset, Menu } from "@/modules/jam-icons";

import styles from "./styles.module.css";

export default function Header() {
	const EffectsOnHover = () => {
		useEffect(() => {
			const setScrollState = (scrollPosition: number) => {
				if (scrollPosition > 48) {
					setScrollFromTop(true);
				} else {
					setScrollFromTop(false);
				}
			};

			let scrollPosition = window.scrollY;

			setScrollState(scrollPosition);

			document.addEventListener("scroll", (event) => {
				scrollPosition = window.scrollY;

				setScrollState(scrollPosition);
			});
		}, []);
	};

	const [mobileNav, setMobileNav] = useState<"close" | "open">("close");
	const [scrollFromTop, setScrollFromTop] = useState<true | false>(false);

	EffectsOnHover();

	return (
		<header
			className={`default-wrapper ${styles.header}`}
			style={{
				background:
					scrollFromTop === true ? "rgba(255, 255, 255, 0.8)" : "none",
				backdropFilter:
					scrollFromTop === true ? "blur(var(--size-12))" : "none",
			}}
		>
			<div className="view-limit">
				<div className={styles.desktopNav}>
					<div className={styles.linkLogoAndMainNavGroup}>
						<Link href="/" className={styles.linkLogo}>
							<Logo version="name" />
						</Link>

						<nav className={styles.mainNav}>
							<a href="/#products" className={styles.link}>
								Products
							</a>
							<a href="/#solutions" className={styles.link}>
								Solutions
							</a>
							<a href="/#services" className={styles.link}>
								Services
							</a>
							<a href="/#configure" className={styles.link}>
								Configure
							</a>
						</nav>
					</div>

					<nav className={styles.auxiliaryNav}>
						<a href="tel:555818282" className={styles.link}>
							<Headset color="var(--color_bice-blue)" className={styles.icon} />
							555 818 282
						</a>

						<Button
							linkType="external"
							link="https://web.whatsapp.com/"
							color="color_tekhelet"
							icon={<ArrowRight />}
						>
							Request a Quote
						</Button>
					</nav>

					<button
						type="button"
						className={styles.mobileNavButton}
						onClick={() =>
							mobileNav === "close"
								? setMobileNav("open")
								: setMobileNav("close")
						}
					>
						<Menu size={32} />
					</button>
				</div>

				<div
					className={styles.mobileNavLayer}
					style={{
						display: mobileNav === "close" ? "none" : "block",
						opacity: mobileNav === "close" ? "0" : "1",
					}}
					onClick={() => setMobileNav("close")}
					onKeyUp={() => setMobileNav("close")}
				/>

				<div
					className={styles.mobileNav}
					style={{ right: mobileNav === "open" ? "0" : "-110vw" }}
				>
					<Link href="/" className={styles.linkLogo}>
						<Logo version="full" />
					</Link>

					<nav className={styles.mainNav}>
						<a href="/#products" className={styles.link}>
							Products
						</a>
						<a href="/#solutions" className={styles.link}>
							Solutions
						</a>
						<a href="/#services" className={styles.link}>
							Services
						</a>
						<a href="/#configure" className={styles.link}>
							Configure
						</a>
					</nav>

					<nav className={styles.auxiliaryNav}>
						<a href="tel:555818282" className={styles.link}>
							<Headset color="var(--color_bice-blue)" className={styles.icon} />
							555 818 282
						</a>

						<Button
							linkType="external"
							link="https://web.whatsapp.com/"
							color="color_tekhelet"
							icon={<ArrowRight />}
						>
							Request a Quote
						</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}
