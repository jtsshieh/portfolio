import { AppProps } from 'next/app';
import '../node_modules/normalize.css/normalize.css';
import { Global, css } from '@emotion/react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global
				styles={css`
					h1,
					h2,
					h3,
					h4,
					h5,
					h6,
					p,
					li,
					a {
						font-family: Montserrat, sans-serif;
					}

					h1 {
						font-weight: 800;
						font-size: 4rem;
					}
					h2 {
						font-weight: 400;
						font-size: 1.5rem;
					}

					body {
						background-color: #7fbcff;
					}
				`}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
