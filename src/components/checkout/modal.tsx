import Image from "next/image";
import tw, { styled } from "twin.macro";
import { BsCheck } from "react-icons/bs";
import Button from "../form/button";
import { Item } from "./item";

// ========== TYPES ==========
interface ModalProps {
	items: Item[];
	grandTotal: number;
}

// ========== STYLES ==========
const Container = styled.div`
	${tw`text-black bg-white rounded-lg`};
	${tw`mx-6 p-8 w-full`};

	h1 {
		${tw`mb-4`};
		${tw`text-xl font-bold`};
		${tw`line-height[28px] letter-spacing[0.86px]`};
	}

	h2 {
		${tw`text-base font-medium`};
		${tw`line-height[25px] text-opacity-50`};
		${tw`mb-6`};
	}
`;

const Items = styled.div`
	${tw`m-6 rounded-lg`};
`;

const ItemContainer = styled.div`
	${tw`bg-transparent`};
	${tw`flex items-center`};

	.image {
		${tw`w-auto h-8`};
		${tw`mr-6`};
		${tw`backdrop-brightness-50`};
		${tw`text-black`};
	}
`;

// ========== COMPONENTS ==========
const ModalItem = ({ item }: { item: Item }) => {
	const { image, name, price, quantity } = item;
	return (
		<ItemContainer>
			<Image src={image} alt={name} className="image" />
			<div>
				<div tw="line-height[25px] flex items-center justify-between text-base font-bold">
					<p>{name}</p>
					<p tw="text-opacity-50 text-sm">x{quantity}</p>
				</div>
				<p>$ {price}</p>
			</div>
		</ItemContainer>
	);
};

const Modal = ({ items, grandTotal }: ModalProps) => {
	const numItems = items.map((item) => item.quantity).reduce((prev, current) => prev + current);

	return (
		<Container>
			<p tw="mb-6 text-orange text-6xl">
				<BsCheck />
			</p>
			<h1>Thank you for your order</h1>
			<h2>You will receive an email confirmation shortly.</h2>
			<Items>
				<div tw="bg-grey-200 rounded-t-lg">
					<ModalItem item={items[0]} />
					{numItems > 0 && (
						<>
							<div tw="w-full h-px bg-black opacity-50" />
							<p tw="line-height[16.5px] letter-spacing[-0.21px] mt-3 text-2xs font-bold">
								and {numItems} other item(s)
							</p>
						</>
					)}
				</div>
				<div tw="line-height[25px] mb-6 px-4 py-4 bg-grey-300 rounded-b-lg">
					<p tw="mb-2 text-grey-100 text-base font-medium">Grand Total</p>
					<p tw="text-white text-lg font-bold">$ {grandTotal}</p>
				</div>
				<Button label="Back to home" href="/" color="orange" size="FULL" />
			</Items>
		</Container>
	);
};

export default Modal;
