import { Dispatch, SetStateAction } from "react";
import tw, { styled } from "twin.macro";

// ========== TYPES ==========
interface QuantityProps {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
}

// ========== STYLES ==========
const Container = styled.div`
	${tw`w-[7.5rem] h-12`};
	${tw`flex items-center justify-center`};
	${tw`bg-grey-200`};
	${tw`text-black text-xs font-bold`};
	${tw`line-height[18px] letter-spacing[1px]`};
`;

const Button = styled.button`
	${tw`transition duration-200 ease-in-out`};
	${tw`bg-transparent`};
	${tw`text-black text-opacity-25 text-xs font-bold`};
	${tw`line-height[18px] letter-spacing[1px]`};
	${tw`hover:(text-orange)`};
`;

// ========== COMPONENTS ==========
const Quantity = ({ count, setCount }: QuantityProps) => {
	const add = () => {
		setCount(count + 1);
	};

	const remove = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<Container>
			<Button type="button" onClick={remove} aria-describedby="Remove 1 from cart">
				-
			</Button>
			<p tw="mx-5">{count}</p>
			<Button type="button" onClick={add} aria-describedby="Add 1 from cart">
				+
			</Button>
		</Container>
	);
};

export default Quantity;
