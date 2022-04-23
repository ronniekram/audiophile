/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import tw, { css } from "twin.macro";
import { buttonColors, ButtonColor } from "../../utils/color";

// ========== TYPES ==========
interface ButtonProps {
	label: string | JSX.Element;
	color: ButtonColor;
	type?: `button` | `reset` | `submit`;
	disabled?: boolean;
	href?: string;
	onClick?: () => void;
}

// ========== STYLES ==========
const styles = css`
	${tw`w-40 h-12`};
	${tw`text-xs font-bold`};
	${tw`letter-spacing[1px]`};
	${tw`flex items-center justify-center`};
	${tw`transition duration-300 ease-in-out`};
`;

// ========== COMPONENTS ==========
const Button = ({ label, color, type, disabled, href, onClick }: ButtonProps) => {
	if (href) {
		return (
			<Link href={href} passHref>
				<a css={[styles, buttonColors[color]]}>{label}</a>
			</Link>
		);
	}
	return (
		<button
			type={type || `button`}
			disabled={disabled}
			onClick={onClick}
			css={[styles, buttonColors[color]]}
		>
			{label}
		</button>
	);
};

export default Button;
