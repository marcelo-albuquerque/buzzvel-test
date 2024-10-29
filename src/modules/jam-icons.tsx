export const Headset = ({
	color,
	className,
}: {
	color?: string;
	className?: string;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-2 -2.5 24 24"
			width="28"
			fill={color ? color : "currentColor"}
			className={className}
		>
			<title>Headset</title>
			<path d="M2 16.09a1 1 0 1 1-2 0V10C0 4.477 4.477 0 10 0s10 4.477 10 10v3.086a1 1 0 1 1-2 0V10a8 8 0 1 0-16 0v6.09zM2 10h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm0 2v5h2v-5H2zm14-2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm0 2v5h2v-5h-2z" />
		</svg>
	);
};

export const ArrowRight = ({
	color,
	className,
}: {
	color?: string;
	className?: string;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-5 -5 24 24"
			width="28"
			fill={color ? color : "currentColor"}
			className={className}
		>
			<title>Arrow Right</title>
			<path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z" />
		</svg>
	);
};

export const ArrowLeft = ({
	color,
	className,
}: {
	color?: string;
	className?: string;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-5 -5 24 24"
			width="28"
			fill={color ? color : "currentColor"}
			className={className}
		>
			<title>Arrow Left</title>
			<path d="M3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z" />
		</svg>
	);
};

export const Menu = ({
	size,
	color,
	className,
}: {
	size?: number;
	color?: string;
	className?: string;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-5 -7 24 24"
			width={size ? size : 28}
			fill={color ? color : "currentColor"}
			className={className}
		>
			<title>Menu</title>
			<path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
		</svg>
	);
};
