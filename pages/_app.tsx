import type { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<div>
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
