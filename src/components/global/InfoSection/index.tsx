import styles from "./styles.module.css";

import type { JSX } from "react";

export default function InfoSection({
	name,
	title,
	description,
	level,
	align,
	colorScheme,
	className,
}: {
	title: JSX.Element | string;

	level: 1 | 2;
	align: "left" | "center";
	name?: string;
	description?: JSX.Element | string;
	colorScheme?: "dark";
	className?: string;
}) {
	return (
		<div
			className={`${styles[align]} ${className} ${colorScheme && styles[colorScheme]}`}
		>
			{name && <span className={styles.name}>{name}</span>}

			{level === 1 && <h1 className={styles.title}>{title}</h1>}
			{level === 2 && <h2 className={styles.title}>{title}</h2>}

			{description && <p className={styles.description}>{description}</p>}
		</div>
	);
}
