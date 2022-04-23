import React from "react";
import tw, { styled } from "twin.macro";

// ========== TYPES ==========
interface InputProps {
	label: string;
	name: string;
	placeholder: string;
	type: `text` | `email` | `number` | `tel`;
	register?: any;
	disabled?: boolean;
	required?: boolean;
}
// ========== STYLES ==========

// ========== COMPONENTS ==========
const Input = ({ label, name, placeholder, register, disabled, required }: InputProps) => {};

export default Input;
