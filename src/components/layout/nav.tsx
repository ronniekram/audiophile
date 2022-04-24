/* eslint-disable prettier/prettier */
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

const Anchor = tw.a`uppercase text-xs letter-spacing[2px] md:(mr-8) transition duration-200 ease-in-out hover:(text-orange)`;
// ========== COMPONENTS ==========
const Nav = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Container>
			<div tw="xl:(hidden) flex items-center justify-between">
				<div tw="md:(justify-start) flex items-center justify-between w-2/3">
					<button
						type="button"
						onClick={() => setOpen(!open)}
						aria-describedby={open ? `Close menu` : `Open menu`}
						tw="md:(mr-10)"
					>
						{open ? <FaTimes /> : <FaBars />}
					</button>
					<Image src="/images/logo.svg" alt="Audiophile logo" width={143} height={25} />
				</div>
				<div tw="flex justify-end w-1/3">
					<Link href="/cart" passHref>
						<a tw="cursor-pointer" aria-describedby="Go to cart">
							<span>
								<BsCart3 />
							</span>
						</a>
					</Link>
				</div>
			</div>

			<div tw="hidden xl:(items-center mx-auto flex justify-between width[69.375rem])">
				<Image src="/images/logo.svg" alt="Audiophile logo" width={143} height={25} />

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
