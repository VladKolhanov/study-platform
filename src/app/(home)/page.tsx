import 'server-only';

import { PageProps } from '@/types/app';

export default function Home({}: PageProps) {
	return (
		<div className="mt-16 text-center font-inter text-3xl">Hello world</div>
	);
}
