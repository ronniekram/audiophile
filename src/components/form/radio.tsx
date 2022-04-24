import { Dispatch, SetStateAction } from "react";
import tw, { styled } from "twin.macro";

// ========== TYPES ==========
interface RadioProps {
	label: string;
	name: string;
	value: string;
	selected: string | null;
	setSelected: Dispatch<SetStateAction<string | null>>;
	register?: any;
}

// ========== STYLES ==========
const FieldSet = styled.fieldset`
	${tw`transition duration-300 ease-out`};
	${tw`w-[17.5rem] md:(w-[19.3125rem])`};
	${tw`h-[3.5rem]`};
	${tw`py-[1.125rem] px-6`};
	${tw`flex items-center`};
	${tw`rounded-lg`};
	${tw`text-black text-sm font-bold`};
	${tw`line-height[19px] letter-spacing[-0.25px]`};
	${tw`hover:(border-orange)`};
`;

const Label = styled.label`
	display: grid;
	grid-template-columns: 1em auto;
	gap: 0.5em;
	${tw`mr-4 text-sm`};
`;

const Button = styled.input`
	${tw`appearance-none`};
	${tw`w-5 h-5`};
	${tw`border rounded-full`};
	${tw`text-[#CFCFCF] bg-transparent`};
	${tw`grid content-center`};
	transform: translateY(0.15rem);

	&::before {
		${tw`w-[10px] h-[10px]`};
		${tw`rounded-full`};
		content: "";
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		box-shadow: inset 1em 1em #d87d4a;
	}

	&:checked::before {
		transform: scale(1);
	}
`;

// ========== COMPONENTS ==========
const Radio = ({ label, name, value, selected, setSelected, register }: RadioProps) => {
	return (
		<FieldSet css={[selected === value ? tw`border-orange` : tw`border-[#CFCFCF]`]}>
			<Label>
				<Button
					type="radio"
					name={name}
					{...register(name, { required: true })}
					onClick={() => setSelected(value)}
				/>
			</Label>
			<p>{label}</p>
		</FieldSet>
	);
};

export default Radio;
