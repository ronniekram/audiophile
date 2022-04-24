import tw, { css } from "twin.macro";

// ========== COMPONENTS ==========
const Ellipsis = () => {
	return (
		<span
			css={css`
				@keyframes dot {
					0% {
						opacity: 0;
					}
					50% {
						opacity: 1;
					}
					100% {
						opacity: 0;
					}
				}
			`}
		>
			<span
				css={[tw`opacity[0] animation[dot 2s infinite] animation-delay[0s] text-current text-2xl`]}
			>
				•
			</span>
			<span
				css={[tw`opacity[0] animation[dot 2s infinite] animation-delay[0s] text-current text-2xl`]}
			>
				•
			</span>
			<span
				css={[tw`opacity[0] animation[dot 2s infinite] animation-delay[0s] text-current text-2xl`]}
			>
				•
			</span>
		</span>
	);
};

export default Ellipsis;
