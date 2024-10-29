export default function EllipseShape({
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
			viewBox="0 0 711 712"
			className={className}
		>
			<title>Ellipse</title>
			<ellipse cx="355.898" cy="356.023" fill={color} rx="355" ry="355.5" />
		</svg>
	);
}
