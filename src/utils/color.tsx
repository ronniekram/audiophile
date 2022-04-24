import tw from "twin.macro";

export const buttonColors = {
	orange: [tw`text-white bg-orange hover:(bg-peach)`],
	black: [tw`text-black bg-white border border-black hover:(text-white bg-black)`],
	transparent: [tw`text-black bg-transparent border border-black hover:(bg-white opacity-50)`],
	shop: [tw`text-black text-opacity-50 bg-transparent hover:(text-orange text-opacity-100)`],
};

export type ButtonColor = keyof typeof buttonColors;
