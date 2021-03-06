/* eslint-disable import/no-cycle */
import { useState } from "react";
import { useForm } from "react-hook-form";
import tw, { styled } from "twin.macro";
import Input from "../form/input";
import Radio from "../form/radio";
import Button from "../form/button";
import Modal from "./modal";
import { Item } from "./item";

// ========== TYPES ==========
export type Payment = `e-money` | `cash` | null;

type FormValues = {
	name: string;
	email: string;
	phone: string;
	address: string;
	zip: string;
	city: string;
	state: string;
	payment: Payment;
	number?: string;
	pin?: string;
};

// ========== STYLES ==========
const Container = styled.div`
	${tw`bg-white rounded-lg`};
	${tw`p-6`};
	${tw`relative z-0`};
`;

const Legend = styled.legend`
	${tw`text-orange text-xs font-bold`};
	${tw`line-height[25px] letter-spacing[0.93px]`};
	${tw`uppercase`};
	${tw`mb-4`};
`;

// ========== COMPONENTS ==========
const CheckoutForm = ({ cart, grand }: { cart: Item[]; grand: number }) => {
	const [selected, setSelected] = useState<Payment>(null);
	const [open, setOpen] = useState<boolean>(false);

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>();

	const onSubmit = (data: FormValues) => {
		console.log(data);
		setOpen(true);
	};

	return (
		<>
			<Container>
				<h1 tw="line-height[38.25rem] letter-spacing[1px] mb-8 text-2xl font-bold uppercase">
					Checkout
				</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<fieldset tw="mb-2">
						<Legend>Billing Details</Legend>
						<Input
							label="Name"
							name="name"
							type="text"
							placeholder="Alexei Ward"
							register={register}
							errors={errors.name?.message}
						/>
						<Input
							label="Email Address"
							name="email"
							type="email"
							placeholder="alexei@gmail.com"
							register={register}
							errors={errors.email?.message}
						/>
						<Input
							label="Phone Number"
							name="phone"
							type="tel"
							placeholder="202-555-0136"
							register={register}
							errors={errors.phone?.message}
						/>
					</fieldset>

					<fieldset tw="mb-2">
						<Legend>Shipping Info</Legend>
						<Input
							label="Address"
							name="address"
							type="text"
							placeholder="1137 Williams Avenue"
							register={register}
							errors={errors.address?.message}
						/>
						<Input
							label="ZIP Code"
							name="zip"
							type="text"
							placeholder="10001"
							register={register}
							errors={errors.zip?.message}
						/>
						<Input
							label="City"
							name="city"
							type="text"
							placeholder="New York"
							register={register}
							errors={errors.city?.message}
						/>
						<Input
							label="State"
							name="state"
							type="text"
							placeholder="New York"
							register={register}
							errors={errors.state?.message}
						/>
					</fieldset>

					<fieldset>
						<Legend>Payment Details</Legend>
						<fieldset>
							<legend>Payment Method</legend>
							<Radio
								label="e-Money"
								name="payment"
								value="e-money"
								selected={selected}
								setSelected={setSelected}
								register={register}
							/>
							<Radio
								label="Cash on Delivery"
								name="payment"
								value="cash"
								selected={selected}
								setSelected={setSelected}
								register={register}
							/>
						</fieldset>
						{selected === `e-money` && (
							<>
								<Input
									label="e-Money Number"
									name="number"
									type="text"
									placeholder="238521993"
									register={register}
									errors={errors.number?.message}
								/>
								<Input
									label="e-Money PIN"
									name="pin"
									type="text"
									placeholder="6891"
									register={register}
									errors={errors.pin?.message}
								/>
							</>
						)}
					</fieldset>
					<Button
						label="Continue & Pay"
						color="orange"
						size="FULL"
						type="submit"
						isLoading={isSubmitting}
					/>
				</form>
			</Container>
			{open && (
				<div tw="absolute z-20 left-0 top-0 flex items-center justify-center w-screen h-screen bg-black opacity-50">
					<Modal items={cart} grandTotal={grand} />
				</div>
			)}
		</>
	);
};

export default CheckoutForm;
