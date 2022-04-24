import tw, { styled } from "twin.macro";
import Button from "../form/button";

// ========== STYLES ==========
const Container = styled.div`
	background-image: url("/images/index/hero-sm.jpg");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		background-image: url("/images/index/hero-md.jpg");
	}

	@media (min-width: 1280px) {
		background-image: url("/images/index/hero-lg.jpg");
	}

	${tw`flex items-center justify-center`};
	${tw`height[31.875rem] w-full`};
	${tw`md:(height[39.9375rem])`};
	${tw`xl:(justify-start)`};
`;

const Content = styled.div`
	${tw`width[20.5rem] mx-auto`};
	${tw`md:(width[23.6875rem])`};
	${tw`xl:(ml-[10.3125rem])`};

	h1 {
		${tw`text-white font-bold uppercase`};
		${tw`text-[36px] line-height[40px] letter-spacing[1.29px]`};
		${tw`md:(line-height[58px] letter-spacing[2px] text-5xl)`};
	}

	h2 {
		${tw`text-grey-100 text-base font-medium`};
		${tw`line-height[25px] my-6`};
		${tw`md:(mb-10 mt-6)`};
	}

	p {
		${tw`text-grey-100 text-sm uppercase`};
		${tw`line-height[19.12px] letter-spacing[10px] mb-4`};
		${tw`md:(mb-6)`};
	}
`;

// ========== COMPONENTS ==========
const Hero = () => (
	<Container>
		<Content>
			<p>New Product</p>
			<h1>XX99 Mark II HeadphoneS</h1>
			<h2>
				Experience natural, lifelike audio and exceptional build quality made for the passionate
				music enthusiast.
			</h2>
			<Button label="See product" color="orange" size="FIXED" href="/products/xx99-mark-ii" />
		</Content>
	</Container>
);

export default Hero;
