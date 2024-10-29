import styles from "./styles.module.css";

export default function CardService({
	icon,
	title,
	description,
	className,
}: {
	icon: JSX.Element;
	title: string;
	description: string;
	className?: string;
}) {
	return (
		<div className={`${styles.card} ${className}`}>
			<span className={styles.iconContainer}>{icon}</span>

			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
		</div>
	);
}
