import Image from "next/image";
import tw, { styled } from "twin.macro";

// ========== STYLES ==========
const Container = styled.div`
	${tw`mx-6 w-full`};
	${tw`xl:(flex flex-row-reverse items-center justify-between)`};

	.image {
		${tw`width[20.4375rem] height[18.75rem]`};
		${tw`md:(width[43.0625rem])`};
		${tw`xl:(width[33.75rem] height[36.75rem])`};
		${tw`object-cover object-center`};
		${tw`rounded-lg`};
	}

	h1 {
		${tw`mb-8 mt-10`};
		${tw`text-black text-2xl font-bold uppercase`};
		${tw`line-height[38.25px] letter-spacing[1px]`};
		${tw`md:(line-height[44px] line-height[1.43px] mt-16 text-4xl)`};
	}

	p {
		${tw`text-grey-300 font-medium`};
		${tw`line-height[25px] text-base`};
	}
`;
// ========== COMPONENTS ==========
const BestGear = () => (
	<Container>
		<Image src="/images/shared/best-gear.jpg" alt="" />
		<div>
			<h1>
				Bringing you the <span tw="text-orange">best</span> audio gear
			</h1>
			<p>
				Located at the heart of New York City, Audiophile is the premier store for high end
				headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury
				demonstration rooms available for you to browse and experience a wide range of our products.
				Stop by our store to meet some of the fantastic people who make Audiophile the best place to
				buy your portable audio equipment.
			</p>
		</div>
	</Container>
);

export default BestGear;
