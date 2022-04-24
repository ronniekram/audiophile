import tw, { styled } from "twin.macro";

// ========== TYPES ==========
interface InputProps {
	label: string;
	name: string;
	placeholder: string;
	type: `text` | `email` | `number` | `tel`;
	register?: any;
	errors?: string;
	disabled?: boolean;
}
// ========== STYLES ==========
const Label = styled.label`
	${tw`font-bold`};
	${tw`letter-spacing[-0.21px] line-height[16.39px]`};
`;

const Field = styled.input`
	${tw`w-[17.5rem] md:(w-[19.3125rem])`};
	${tw`h-[3.5rem]`};
	${tw`py-[1.125rem] px-6`};
	${tw`rounded-lg`};
	${tw`text-black text-sm font-bold`};
	${tw`line-height[19px] letter-spacing[-0.25px]`};
	${tw`placeholder:(text-opacity-50)`};
`;

// ========== COMPONENTS ==========
const Input = ({ label, name, type, placeholder, register, errors, disabled }: InputProps) => {
	return (
		<fieldset>
			<div
				tw="text-2xs flex items-center justify-between mb-2"
				css={[errors ? tw`text-red` : tw`text-black`]}
			>
				<Label htmlFor={name}>{label}</Label>
				{errors && <p>{errors}</p>}
			</div>
			<Field
				name={name}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				{...register(name, { required: true })}
				css={[
					errors ? tw`border-2 border-red` : tw`border-[#CFCFCF] border active:(border-orange)`,
				]}
			/>
		</fieldset>
	);
};

export default Input;
