"use client";

import { useEffect, useState } from "react";

import { ThreeStars, Thunderstorm, Timer, Tower } from "iconoir-react";

import InfoSection from "@/components/global/InfoSection";
import Button from "@/components/global/Button";
import Carousel from "@/components/global/Carousel";
import CardTestimonial from "@/components/global/cards/CardTestimonial";

import { ArrowRight } from "@/modules/jam-icons";

import styles from "./styles.module.css";

export default function SectionHarvesters() {
	const cards = [
		{
			id: 1,
			icon: <Thunderstorm width="4rem" height="4rem" />,
			description:
				"Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
			avatar: {
				name: "Jane Cooper",
				description: "10KWh",
				photo:
					"https://www.avaaatars.com/_next/image?url=%2Favatars%2Favatar28.png&w=64&q=75",
			},
		},
		{
			id: 2,
			icon: <ThreeStars width="4rem" height="4rem" />,
			description:
				"Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
			avatar: {
				name: "Ralph Edwards",
				description: "32KWh",
				photo:
					"https://www.avaaatars.com/_next/image?url=%2Favatars%2Favatar57.png&w=64&q=75",
			},
		},
		{
			id: 3,
			icon: <Tower width="4rem" height="4rem" />,
			description:
				"Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
			avatar: {
				name: "Courtney Henry",
				description: "6KWh",
				photo:
					"https://www.avaaatars.com/_next/image?url=%2Favatars%2Favatar33.png&w=64&q=75",
			},
		},
		{
			id: 4,
			icon: <Timer width="4rem" height="4rem" />,
			description:
				"Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
			avatar: {
				name: "Cameron Williamson",
				description: "12KWh",
				photo:
					"https://www.avaaatars.com/_next/image?url=%2Favatars%2Favatar35.png&w=64&q=75",
			},
		},
		{
			id: 5,
			icon: <Thunderstorm width="4rem" height="4rem" />,
			description:
				"Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
			avatar: {
				name: "Gregor Smith",
				description: "26KWh",
				photo:
					"https://www.avaaatars.com/_next/image?url=%2Favatars%2Favatar22.png&w=64&q=75",
			},
		},
	];

	const [isMobile, setIsMobile] = useState<boolean>(false);

	const verifyIsMobile = () => {
		useEffect(() => {
			const media = window.matchMedia("(max-width: 680px)");

			const setMediaState = (media: boolean) => {
				if (media) {
					setIsMobile(true);
				} else {
					setIsMobile(false);
				}
			};

			setMediaState(media.matches);

			window.addEventListener("resize", () => {
				const media = window.matchMedia("(max-width: 680px)");

				setMediaState(media.matches);
			});
		}, []);
	};

	verifyIsMobile();

	return (
		<section className={styles.section}>
			<div className="default-wrapper dark">
				<div className={`view-limit ${styles.viewLimit}`}>
					<div className={styles.infoSectionAndButtonContainer}>
						<InfoSection
							level={2}
							align={isMobile ? "center" : "left"}
							name="Join other Sun harvesters"
							title="Make something awesome"
							description="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
							colorScheme="dark"
						/>

						<Button
							linkType="external"
							link="https://web.whatsapp.com/"
							color="color_mustard"
							icon={<ArrowRight />}
							className={styles.button}
						>
							Request a Quote
						</Button>
					</div>
				</div>
			</div>

			<Carousel color="var(--color_mustard)">
				{cards.map((card) => (
					<CardTestimonial
						key={card.id}
						description={card.description}
						icon={card.icon}
						avatar={card.avatar}
						className={`embla__slide ${styles.embla__slide}`}
					/>
				))}
			</Carousel>
		</section>
	);
}
