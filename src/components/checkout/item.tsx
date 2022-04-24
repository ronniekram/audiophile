import Image from "next/image";
import tw, { styled } from "twin.macro";

// ========== TYPES ==========
export type Item = {
	image: string;
	name: string;
	price: number;
	quantity: number;
};

// ========== STYLES ==========
const Container = styled.div`
	${tw`flex items-center w-full`};
	${tw`w-full rounded-lg`};

	.image {
		${tw`w-16 h-16`};
		${tw`mr-4`};
		${tw`rounded-lg`};
		${tw`backdrop-brightness-50`};
	}
`;

// ========== COMPONENTS ==========
const CartItem = ({ image, name, price, quantity }: Item) => {
	return (
		<Container>
			<div>
				<Image src={image} className="image" />
			</div>
			<div tw="line-height[25px] text-black text-base font-bold">
				<div tw="flex items-center justify-between">
					<p tw="uppercase">{name}</p>
					<p tw="text-opacity-50">x{quantity}</p>
				</div>
				<p tw="text-opacity-50 text-sm">{`$${price}`}</p>
			</div>
		</Container>
	);
};

export default CartItem;
