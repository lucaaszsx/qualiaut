'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
	return (
		<>
			<h1>Oi, mundo!</h1>
			<DotLottieReact
				src="/assets/images/illustrations/PaperPlane.lottie"
				loop
				autoplay
			/>
		</>
	);
}