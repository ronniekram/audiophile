import tw, { styled } from "twin.macro";
import CartItem, { Item } from "./item";

// ========== STYLES ==========
const Container = styled.div`
	${tw`text-black bg-white`};
	${tw`rounded-lg`};
	${tw`p-6`};

	h1 {
		${tw`text-lg font-bold`};
		${tw`line-height[25px] letter-spacing[1.29px]`};
		${tw`mb-8`};
	}
`;

const LineItem = styled.li`
	${tw`flex items-center justify-between`};
	${tw`line-height[25px]`};
	${tw`uppercase`};

	span {
		${tw`text-base font-medium`};
		${tw`text-opacity-50`};
	}

	p {
		${tw`text-lg font-bold`};
	}
`;
// ========== COMPONENTS ==========
const Summary = ({ items }: { items: Item[] }) => {
	const total = items
		.map((item) => item.price * item.quantity)
		.reduce((prev, current) => prev + current);

	const tax = total * 0.2;
	const grand = total + tax + 50;

	return (
		<Container>
			<h1>Summary</h1>
			<div tw="mb-2">
				{items.map((item) => {
					const { image, name, price, quantity } = item;
					return (
						<CartItem key={name} image={image} name={name} price={price} quantity={quantity} />
					);
				})}
			</div>
			<ul tw="mb-8">
				<LineItem>
					<span>Total</span>
					<p>$ {total}</p>
				</LineItem>
				<LineItem>
					<span>Shipping</span>
					<p>$ 50</p>
				</LineItem>
				<LineItem>
					<span>VAT (included)</span>
					<p>$ {tax}</p>
				</LineItem>
				<LineItem>
					<span>Grand Total</span>
					<p tw="text-orange">$ {grand}</p>
				</LineItem>
			</ul>
		</Container>
	);
};

export default Summary;
