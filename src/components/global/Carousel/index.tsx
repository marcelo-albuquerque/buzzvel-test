"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "@/modules/jam-icons";

export default function Carousel({
	children,
	color,
	className,
}: {
	children: React.ReactNode;
	color: string;
	className?: string;
}) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		dragFree: true,
	});

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className={`default-wrapper embla ${className}`}>
			<div
				className="embla__viewport"
				ref={emblaRef}
				onMouseDown={(event) => {
					const div = event.currentTarget;

					div.style.cursor = "grabbing";
				}}
				onMouseUp={(event) => {
					const div = event.currentTarget;

					div.style.cursor = "grab";
				}}
			>
				<div className="view-limit embla__container">{children}</div>
			</div>

			<div className="embla__buttons dark">
				<button
					type="button"
					aria-label="Prev"
					className="embla__prev"
					onClick={scrollPrev}
					style={{ borderColor: color }}
				>
					<ArrowLeft color={color} />
				</button>
				<button
					type="button"
					aria-label="Next"
					className="embla__next"
					onClick={scrollNext}
					style={{ borderColor: color }}
				>
					<ArrowRight color={color} />
				</button>
			</div>
		</div>
	);
}
