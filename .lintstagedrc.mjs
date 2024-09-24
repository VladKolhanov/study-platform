import path from 'path';

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
	`prettier --write ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' ')}`;

export default {
	'*.{js,mjs,jsx,ts,tsx}': [buildPrettierCommand, buildEslintCommand],
	'*.{json,md,mdx,html}': [buildPrettierCommand],
};
