/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import tw, { styled } from "twin.macro";
import { useSpring, animated } from "react-spring";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

// ========== STYLES ==========
const Container = styled.nav`
	${tw`text-white text-lg bg-grey-300`};
	${tw`px-6 py-8 md:(px-10)`};
`;

const Anchor = tw.a`uppercase text-xs letter-spacing[2px] mb-4 md:(mr-8)`;
// ========== COMPONENTS ==========
const Nav = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Container>
			<div tw="xl:(hidden) flex items-center justify-between">
				<div tw="md:(justify-start) flex items-center justify-between w-full">
					<button
						type="button"
						onClick={() => setOpen(!open)}
						aria-describedby={open ? `Close menu` : `Open menu`}
						tw="md:(mr-10)"
					>
						{open ? <FaTimes /> : <FaBars />}
					</button>
					<Image src="/images/logo.svg" />
				</div>
				<Link href="/cart" passHref>
					<a tw="cursor-pointer" aria-describedby="Go to cart">
						<BsCart3 />
					</a>
				</Link>
			</div>

			<div tw="xl:(flex items-center justify-between) hidden width[69.375rem] mx-auto">
				<Image src="/images/logo.svg" alt="Audiophile logo" />

				<ul>
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

				<Link href="/cart" passHref>
					<a tw="cursor-pointer" aria-describedby="Go to cart">
						<BsCart3 />
					</a>
				</Link>
			</div>
		</Container>
	);
};

export default Nav;
