import tw, { styled } from "twin.macro";
import CartItem, { CartItemProps as Item } from "./item";
import Button from "../form/button";

// ========== TYPES ==========
interface CartProps {
	items: Item[];
	total: number;
}
// ========== STYLES ==========
const Container = styled.div`
	${tw`text-black bg-white rounded-lg`};
	${tw`px-7 py-8`};
`;

// ========== COMPONENTS ==========
const Cart = ({ items, total }: CartProps) => {
	const numItems = items.length;

	return (
		<Container>
			<div tw="flex items-center justify-between">
				<p tw="line-height[25px] letter-spacing[1.29px] text-lg font-bold uppercase">
					{` `}
					Cart ({numItems})
				</p>
				<button
					type="button"
					onClick={() => console.log(`All items removed.`)}
					tw="line-height[25px] text-grey-300 underline text-base font-medium"
				>
					Remove all
				</button>
			</div>
			<div tw="my-8">
				{items.map((item) => (
					<CartItem key={item.name} name={item.name} image={item.image} price={item.price} />
				))}
			</div>
			<div tw="line-height[25px] flex items-center justify-between mb-6">
				<p tw="text-grey-300 font-medium uppercase">Total</p>
				<p tw="text-lg font-bold">$ {total}</p>
			</div>

			<Button label="Go to checkout" href="/checkout" color="orange" size="FULL" />
		</Container>
	);
};

export default Cart;
