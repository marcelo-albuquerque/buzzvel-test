import Avatar from "../../Avatar";
import styles from "./styles.module.css";

export default function CardTestimonial({
	icon,
	description,
	avatar,
	className,
}: {
	icon: JSX.Element;
	description: string;
	avatar: { photo: string; name: string; description: string };
	className?: string;
}) {
	return (
		<div className={`${styles.card} ${className}`}>
			{icon}
			<p className={styles.description}>{description}</p>

			<Avatar
				name={avatar.name}
				description={avatar.description}
				photo={avatar.photo}
			/>
		</div>
	);
}
