import tw, { styled } from "twin.macro";

// ========== TYPES ==========
interface ItemProps {
	image: any;
	name: string;
	price: number;
	quantity: number;
}

// image: 4rem
// backdrop-brightness-50, rounded-lg
// ========== STYLES ==========
const Container = styled.div`
	${tw`flex items-center w-full`};
	${tw`w-full rounded-lg`};
`;
// ========== COMPONENTS ==========
