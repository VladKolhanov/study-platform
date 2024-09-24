import { PropsWithChildren } from 'react';

export type LayoutProps<Params = void, ParallelRoutes = void> = Readonly<
	PropsWithChildren<{ params: Params }> & ParallelRoutes
>;

export type PageProps<Params = void> = Readonly<{
	params: Params;
	searchParams: Record<string, string | string[] | undefined>;
}>;
