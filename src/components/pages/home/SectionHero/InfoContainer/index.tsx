import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";

import { ArrowRight } from "@/modules/jam-icons";

import styles from "./styles.module.css";

export default function InfoContainer() {
	return (
		<div className={styles.infoContainer}>
			<h1>Get the Sun to Power Your Home</h1>

			<p className={styles.description}>
				Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci
				dui consequat turpis scelerisque.
			</p>

			<Button
				linkType="external"
				link="https://web.whatsapp.com/"
				color="color_tekhelet"
				icon={<ArrowRight />}
			>
				Request a Quote
			</Button>

			<div className={styles.testimonialsContainer}>
				<p className={styles.testimonial}>
					“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
					orci dui consequat turpis scelerisque faucibus.”
				</p>

				<Avatar
					photo="https://www.avaaatars.com/_next/image?url=%2Favatars%2Favatar36.png&w=64&q=100"
					name="Rwanda Melflor"
					description="zerowaste.com"
					backgroundColor="#ffafcc"
					className={styles.avatar}
				/>
			</div>
		</div>
	);
}
