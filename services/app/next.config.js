/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require(`next-compose-plugins`);
const withTM = require(`next-transpile-modules`)([
	`api`,
]);

module.exports = withPlugins([withTM], {
	future: {
		webpack5: true,
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.externals.push('_http_common');
			// config.externals.push('encoding');
		}
		return config;
	},
	target: 'serverless',
});
