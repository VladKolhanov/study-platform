import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(['development', 'production', 'test']),
		POSTGRES_USER: z.string(),
		POSTGRES_DB: z.string(),
		POSTGRES_PASSWORD: z.string(),
		POSTGRES_PORT: z.number(),
		DATABASE_URL: z.string(),
	},
	client: {
		NEXT_PUBLIC_BASE_URL: z.string().url(),
	},
	runtimeEnv: {
		POSTGRES_USER: process.env.POSTGRES_USER,
		POSTGRES_DB: process.env.POSTGRES_DB,
		POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
		POSTGRES_PORT: process.env.POSTGRES_PORT,
		DATABASE_URL: process.env.DATABASE_URL,
		NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
	},
});
