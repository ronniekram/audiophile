import Image from "next/image";
import tw, { styled } from "twin.macro";
import Button from "../form/button";

// ========== STYLES ==========
const Container = styled.nav`
	${tw`bg-white rounded-b-lg`};
	${tw`px-6 py-8`};
	${tw`px-10 py-14`};
	${tw`md:(flex items-center justify-between)`};
`;

const Item = styled.div`
	${tw`width[20.3125rem] height[10.3125rem]`};
	${tw`md:(width[13.9375rem] height[10.3125rem])`};
	${tw`flex flex-col items-center`};
	${tw`mb-4 mx-auto rounded-lg`};
	${tw`text-black bg-grey-200`};
	${tw`line-height[20.49px] letter-spacing[1.07px] font-bold`};

	.image {
		${tw`height[6.5rem]`};
	}
`;

// ========== COMPONENTS ==========
const MenuItem = ({ image, href, label }: { image: string; href: string; label: string }) => {
	return (
		<Item>
			<div tw="-mt-14">
				<Image src={image} alt={`Shop ${label}`} placeholder="blur" layout="fill" />
			</div>

			<p tw="mb-4 mt-8">{label}</p>

			<Button href={href} label="Shop" color="shop" size="FIXED" />
		</Item>
	);
};

const Menu = () => {
	<Container>
		<MenuItem
			image="/images/shared/thumbnail-headphones.png"
			href="/headphones"
			label="Headphones"
		/>
		<MenuItem image="/images/shared/thumbnail-speakers.png" href="/speakers" label="Speakers" />
		<MenuItem image="/images/shared/thumbnail-earphones.png" href="/earphones" label="Earphones" />
	</Container>;
};

export default Menu;
