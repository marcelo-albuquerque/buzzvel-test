import Image from "next/image";

import {
	PerspectiveView,
	ThumbsUp,
	Tournament,
	TransitionUp,
} from "iconoir-react";

import InfoSection from "@/components/global/InfoSection";
import CardService from "@/components/global/cards/CardService";
import RectangleRoundedShape from "@/components/global/RectangleRoundedShape";

import mobileIllustration2 from "@/assets/illustrations/mobile-screen-2.svg";

import styles from "./styles.module.css";

export default function SectionSystemFeatures() {
	const cards = [
		{
			id: 1,
			icon: <Tournament width="2.5rem" height="2.5rem" />,
			title: "Erat sit",
			description:
				"Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.",
		},
		{
			id: 2,
			icon: <ThumbsUp width="2.5rem" height="2.5rem" />,
			title: "Ullamcorper arcu",
			description:
				"Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.",
		},
		{
			id: 3,
			icon: <TransitionUp width="2.5rem" height="2.5rem" />,
			title: "Et pellentesque",
			description:
				"Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.",
		},
		{
			id: 4,
			icon: <PerspectiveView width="2.5rem" height="2.5rem" />,
			title: "Amet egestas",
			description:
				"Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ",
		},
	];

	return (
		<section className={`default-wrapper ${styles.section}`}>
			<div className={`view-limit ${styles.viewLimit}`}>
				<RectangleRoundedShape
					color="var(--color_amber)"
					size={1146}
					className={styles.rectangleRoundedShape}
				/>

				<div className={styles.infoSectionAndCardsContainer}>
					<InfoSection
						level={2}
						align="left"
						name="System features"
						title="Powerful features"
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

				<Image
					src={mobileIllustration2}
					alt="Image Mobile Screen"
					className={styles.mobileIllustration1}
				/>
			</div>
		</section>
	);
}
