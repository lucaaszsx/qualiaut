import {
	SITE_DESCRIPTION,
	SITE_TITLE,
	SITE_THEME,
	SITE_NAME,
	SITE_URL
} from '@/utils/constants/SEO';
import { ThemeProvider } from '@/context/ThemeContext';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/HeaderComponent';
import Footer from '@/components/FooterComponent';
import '@/styles/globals.css';
import '@/styles/reset.css';

export const metadata: Metadata = {
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	manifest: '/manifest.json',
	icons: {
		icon: '/assets/images/icons/favicon.ico',
		apple: '/assets/images/icons/icon-512.png'
	},
	openGraph: {
		type: 'website',
		url: SITE_URL,
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		siteName: SITE_NAME,
		images: [
			{
				url: '/assets/images/covers/cover.png',
				width: 1042,
				height: 512,
				alt: SITE_TITLE
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: [ '/assets/images/covers/cover.png' ]
	}
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: SITE_THEME
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body>
				<ThemeProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}