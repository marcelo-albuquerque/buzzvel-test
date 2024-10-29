import Image, { type StaticImageData } from "next/image";

import styles from "./styles.module.css";

export default function Avatar({
	photo,
	name,
	backgroundColor,
	description,
	className,
}: {
	photo: string | StaticImageData;
	name: string;
	description: string;
	backgroundColor?: string;
	className?: string;
}) {
	return (
		<div className={`${styles.avatar} ${className}`}>
			<Image
				src={photo}
				width={64}
				height={64}
				alt="Foto"
				className={styles.photo}
				style={{ backgroundColor: backgroundColor }}
			/>

			<div className={styles.infoGroup}>
				<p className={styles.name}>{name}</p>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
}
