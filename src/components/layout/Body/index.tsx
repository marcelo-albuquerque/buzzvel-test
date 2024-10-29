"use client";

import { useEffect } from "react";

import Lenis from "lenis";

export default function Body({
	children,
	className,
}: Readonly<{
	children: React.ReactNode;
	className?: string;
}>) {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	return <body className={className}>{children}</body>;
}
