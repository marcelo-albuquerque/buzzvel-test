import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Body from "@/components/layout/Body";
import Footer from "@/components/layout/Footer";

import { Roboto } from "next/font/google";

import opengraphImage from "@/assets/images/opengraph.jpg";

import "@/styles/reset-piccalil.css";
import "@/styles/reset-kerq.css";
import "@/styles/colors.css";
import "@/styles/sizes.css";
import "@/styles/globals.css";
import "@/styles/lenis.css";
import "@/styles/embla-carousel.css";

const roboto = Roboto({
	weight: ["400", "500", "700", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
	variable: "--body-font",
});

export const metadata: Metadata = {
	title: "Soller - Get the Sun to Power Your Home",
	description:
		"Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.",
	openGraph: { images: opengraphImage.src },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Body className={roboto.variable}>
				<Header />

				{children}

				<Footer />
			</Body>
		</html>
	);
}
