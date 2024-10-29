import Logo from "@/components/global/Logo";
import styles from "./styles.module.css";

export default function Footer() {
	return (
		<footer className="default-wrapper">
			<div className={`view-limit ${styles.viewLimit}`}>
				<div className={styles.logoAndCopyrightGroup}>
					<Logo version="full" className={styles.logo} />

					<p className={styles.copyright}>
						© 2023 Soller, Inc. All rights reserved.
					</p>
				</div>

				<nav className={styles.nav}>
					<a href="#terms">Terms</a>
					<a href="#privacy">Privacy</a>
					<a href="#support">Support</a>
				</nav>
			</div>
		</footer>
	);
}
