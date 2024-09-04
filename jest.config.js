module.exports = {
	testEnvironment: 'node',
	modulePathIgnorePatterns: ['./dist'],
	collectCoverageFrom: ['./src/**/*', '!./src/server.ts'],
	transform: {
		'.*': [
			'ts-jest',
			{
				ignoreCoverageForAllDecorators: true,
			},
		],
	},
}
