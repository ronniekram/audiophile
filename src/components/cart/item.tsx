import { useState } from "react";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import Quantity from "../form/quantity";

// ========== TYPES ==========
export type CartItemProps = {
	image: string;
	name: string;
	price: number;
};

// ========== STYLES ==========
const Container = styled.div`
	${tw`flex items-center w-full`};
	${tw`w-full rounded-lg`};
	${tw`mb-6`};

	.image {
		${tw`w-16 h-16`};
		${tw`mr-4`};
		${tw`rounded-lg`};
		${tw`backdrop-brightness-50`};
	}
`;

// ========== COMPONENTS ==========
const CartItem = ({ image, name, price }: CartItemProps) => {
	const [quantity, setQuantity] = useState<number>(1);

	return (
		<Container>
			<div>
				<Image src={image} className="image" placeholder="blur" layout="fill" />
			</div>
			<div tw="line-height[25px] flex items-center justify-between text-black text-base font-bold">
				<div>
					<p tw="uppercase">{name}</p>
					<p tw="text-opacity-50 text-sm">{`$${price}`}</p>
				</div>
				<div>
					<Quantity count={quantity} setCount={setQuantity} />
				</div>
			</div>
		</Container>
	);
};

export default CartItem;
