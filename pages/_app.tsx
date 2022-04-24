import type { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";
import Nav from "../src/components/layout/nav";
import Footer from "../src/components/layout/footer";
import "../src/assets/styles/globals.css";
import "../src/assets/styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<div tw="flex flex-col w-screen min-h-screen font-manrope antialiased bg-grey-100">
				<Nav />
				<div css={[`flex: 1 0 auto;`]}>
					<Component {...pageProps} />
				</div>
				<div css={[`flex-shrink: 0;`]}>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default MyApp;
