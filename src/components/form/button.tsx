/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import tw, { css } from "twin.macro";
import { HiChevronRight } from "react-icons/hi";
import { buttonColors, ButtonColor } from "../../utils/color";
import Ellipsis from "../misc/ellipsis";

// ========== TYPES ==========
const sizes = {
	FIXED: tw`w-40`,
	FULL: tw`w-full`,
};

interface ButtonProps {
	label: string | JSX.Element;
	color: ButtonColor;
	size: keyof typeof sizes;
	type?: `button` | `reset` | `submit`;
	disabled?: boolean;
	href?: string;
	onClick?: () => void;
	isLoading?: boolean;
}

// ========== STYLES ==========
const styles = css`
	${tw`h-12`};
	${tw`text-xs font-bold uppercase`};
	${tw`letter-spacing[1px]`};
	${tw`flex items-center justify-center`};
	${tw`transition duration-300 ease-in-out`};
	${tw`cursor-pointer`};
`;

// ========== COMPONENTS ==========
const Button = ({ label, color, size, type, disabled, href, onClick, isLoading }: ButtonProps) => {
	const shopLabel = isLoading ? (
		<Ellipsis />
	) : (
		<div tw="flex items-center">
			{` `}
			<p>{label}</p>
			{` `}
			<span tw="ml-3 text-orange">
				<HiChevronRight />
				{` `}
			</span>
		</div>
	);

	const regLabel = isLoading ? <Ellipsis /> : label;

	if (href) {
		return (
			<Link href={href} passHref>
				<a css={[styles, buttonColors[color], sizes[size]]}>
					{color === `shop` ? shopLabel : regLabel}
				</a>
			</Link>
		);
	}
	return (
		<button
			type={type || `button`}
			disabled={disabled}
			onClick={onClick}
			css={[styles, buttonColors[color], sizes[size]]}
		>
			{color === `shop` ? shopLabel : regLabel}
		</button>
	);
};

export default Button;
