import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './',
});

const config: Config = {
	bail: 5,
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	clearMocks: true,
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
	collectCoverage: true,
	coverageDirectory: 'coverage',
};

export default createJestConfig(config);
