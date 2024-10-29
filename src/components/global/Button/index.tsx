import type { MouseEventHandler, JSX } from "react";

import styles from "./styles.module.css";

export default function Button({
	children,
	color,
	colorHover,
	link,
	linkType,
	icon,
	className,
}: {
	children: React.ReactNode;
	color: string;
	link: string;
	linkType: "internal" | "external";
	colorHover?: string;
	icon?: JSX.Element | boolean;
	className?: string;
}) {
	return (
		<a
			href={link}
			target={linkType === "internal" ? "_self" : "_blank"}
			rel="noreferrer"
			className={`${styles.button} ${styles[color]} ${className}`}
		>
			{children}
			{icon && <span className={styles.iconContainer}>{icon}</span>}
		</a>
	);
}
