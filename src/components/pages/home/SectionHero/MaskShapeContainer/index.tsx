import Image from "next/image";

import maskedPhoto from "@/assets/photos/masked.png";

import styles from "./styles.module.css";

export default function MaskShapeContainer() {
	return (
		<div className={styles.maskShapeContainer}>
			<Image
				src={maskedPhoto}
				alt="Photo Masked"
				className={styles.maskedPhoto}
				priority
			/>
		</div>
	);
}
