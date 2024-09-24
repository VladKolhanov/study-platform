import 'server-only';

import type { Metadata } from 'next';

import { inter } from '@/shared/fonts';
import type { LayoutProps } from '@/types/app';
import '@/styles/main.css';

export const metadata: Metadata = {
	title: 'Study',
	description: 'Study english platform',
	icons: {
		icon: { rel: 'icon', type: 'icon/ico', url: '/favicon/favicon.ico' },
	},
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	);
}
