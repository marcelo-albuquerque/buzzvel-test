export default function RectangleRoundedShape({
	size,
	color,
	className,
}: {
	size: number;
	color: string;
	className?: string;
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			fill="none"
			viewBox="0 0 1148 1001"
			className={className}
		>
			<title>Rectangle</title>
			<path
				fill={color}
				d="M601.054 947.203C409.737 1057.66 165.101 992.11 54.643 800.793-55.814 609.476 9.736 364.839 201.054 254.382l346.41-200C738.782-56.077 983.418 9.473 1093.88 200.791c110.45 191.317 44.9 435.954-146.415 546.411l-346.411 200Z"
			/>
		</svg>
	);
}
