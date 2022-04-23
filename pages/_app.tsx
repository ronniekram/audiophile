import type { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";
import "../assets/styles/globals.css";
import "../assets/styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<div tw="font-manrope antialiased">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
