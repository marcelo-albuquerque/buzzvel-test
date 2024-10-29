import InfoContainer from "./InfoContainer";
import MaskShapeContainer from "./MaskShapeContainer";

import styles from "./styles.module.css";

export default function SectionHero() {
	return (
		<section className={`default-wrapper ${styles.section}`}>
			<div className={`view-limit ${styles.viewLimit}`}>
				<InfoContainer />

				<MaskShapeContainer />
			</div>
		</section>
	);
}
