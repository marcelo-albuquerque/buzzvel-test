import Image from "next/image";

import EllipseShape from "@/components/global/EllipseShape";
import InfoSection from "@/components/global/InfoSection";

import screenDesktopIllustration from "@/assets/illustrations/desktop-screen.svg";

import styles from "./styles.module.css";

export default function SectionNoMoreWaste() {
	return (
		<section className={`default-wrapper ${styles.section}`}>
			<div className={`view-limit ${styles.viewLimit}`}>
				<EllipseShape
					color="var(--color_gamboge)"
					size={710}
					className={`${styles.shape} ${styles.ellipseShapeMostard}`}
				/>

				<InfoSection
					level={2}
					align="center"
					name="No more waste"
					title="Pick the Sun"
					description="Et pulvinar nec interdum integer id urna molestie porta nullam. A,
					donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
					pharetra sed in mauris elementum sollicitudin."
				/>

				<Image
					src={screenDesktopIllustration}
					alt="Image Desktop Screen"
					className={styles.screenDesktopIllustration}
				/>

				<EllipseShape
					color="var(--color_french-violet)"
					size={596}
					className={`${styles.shape} ${styles.ellipseShapePurple}`}
				/>
			</div>
		</section>
	);
}
