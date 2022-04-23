import tw from "twin.macro";

export const buttonColors = {
	orange: [tw`bg-orange text-white hover:(bg-peach)`],
	black: [tw`bg-white border border-black text-black hover:(bg-black text-white)`],
	shop: [tw`bg-transparent text-black text-opacity-50 hover:(text-orange text-opacity-100)`],
};

export type ButtonColor = keyof typeof buttonColors;
