import Image from "next/image";

import InfoSection from "@/components/global/InfoSection";

import mobileIllustration1 from "@/assets/illustrations/mobile-screen-1.svg";

import styles from "./styles.module.css";
import CardService from "@/components/global/cards/CardService";
import { PiggyBank, Trekking, Trophy, Truck } from "iconoir-react";
import RectangleRoundedShape from "@/components/global/RectangleRoundedShape";

export default function SectionServices() {
	const cards = [
		{
			id: 1,
			icon: <Truck width="2.5rem" height="2.5rem" color="red" />,
			title: "Et mauris",
			description:
				"Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
		},
		{
			id: 2,
			icon: <Trophy width="2.5rem" height="2.5rem" />,
			title: "Eget sit",
			description:
				"Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
		},
		{
			id: 3,
			icon: <Trekking width="2.5rem" height="2.5rem" />,
			title: "Imperdiet pellentesque",
			description:
				"Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.",
		},
		{
			id: 4,
			icon: <PiggyBank width="2.5rem" height="2.5rem" />,
			title: "Imperdiet pellentesque",
			description:
				"Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.",
		},
	];

	return (
		<section className={`default-wrapper ${styles.section}`}>
			<div className={`view-limit ${styles.viewLimit}`}>
				<RectangleRoundedShape
					color="var(--color_tekhelet)"
					size={1146}
					className={styles.rectangleRoundedShape}
				/>

				<Image
					src={mobileIllustration1}
					alt="Image Mobile Screen"
					className={styles.mobileIllustration1}
				/>

				<div className={styles.infoSectionAndCardsContainer}>
					<InfoSection
						level={2}
						align="left"
						name="Services"
						title="Personalized services"
						description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
					/>

					<div className={styles.cardsContainer}>
						{cards.map((card) => (
							<CardService
								key={card.id}
								icon={card.icon}
								title={card.title}
								description={card.description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
