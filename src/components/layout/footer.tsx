/* eslint-disable prettier/prettier */
import Image from "next/image";
import Link from "next/link";
import tw, { styled } from "twin.macro";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

// ========== STYLES ==========
const Container = styled.footer`
	${tw`w-full`};
	${tw`pb-10 px-6`};
	${tw`md:(px-10)`};
  ${tw`xl:(pb-12 px-[10.3125rem])`};
	${tw`text-white bg-grey-300`};
	${tw`line-height[25px] text-center`};

	.image {
		${tw`mx-auto my-12 md:(mb-8 mt-14)`};
		${tw`width[8.9375rem]`};
	}
`;

const Anchor = tw.a`uppercase text-xs letter-spacing[2px] mb-4 md:(mr-8)`;

// ========== COMPONENTS ==========
const Footer = () => {
	return (
		<Container>
			<div>
				<div tw="xl:(flex justify-between)">
          <div tw="width[6.3125rem] mx-auto h-1" />
            <Image src="/images/logo.svg" alt="Audiophile logo" className="image" />
          </div>
          <ul tw="md:(flex)">
            <Link href="/" passHref>
              <Anchor>Home</Anchor>
            </Link>
            <Link href="/headphones" passHref>
              <Anchor>Headphones</Anchor>
            </Link>
            <Link href="/speakers" passHref>
              <Anchor>Speakers</Anchor>
            </Link>
            <Link href="/earphones" passHref>
              <Anchor>Earphones</Anchor>
            </Link>
          </ul>
        </div>

			<p tw="mb-20 md:(mt-8 my-12 text-grey-100 font-medium)">
				Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
				lovers and sound specialists who are devoted to helping you get the most out of personal
				audio. Come and visit our demo facility - we're open 7 days a week.
			</p>

			<div tw="items-center md:(flex justify-between)">
				<p tw="text-grey-100 font-bold">Copyright 2021. All Rights Reserved</p>

				<div tw="flex items-center justify-center mt-12 text-white text-xl">
					<a
						href="https://linkedin/com/in/arynn-boniface"
						target="_blank"
						rel="noreferrer"
						tw="mx-4"
					>
						<BsFacebook />
					</a>
					<a
						href="https://linkedin/com/in/arynn-boniface"
						target="_blank"
						rel="noreferrer"
						tw="mx-4"
					>
						<BsTwitter />
					</a>
					<a
						href="https://linkedin/com/in/arynn-boniface"
						target="_blank"
						rel="noreferrer"
						tw="mx-4"
					>
						<BsInstagram />
					</a>
				</div>
			</div>
		</Container>
	);
};

export default Footer;
