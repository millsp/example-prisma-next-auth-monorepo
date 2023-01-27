/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require(`next-compose-plugins`);
const withTM = require(`next-transpile-modules`)([
	`api`,
]);

module.exports = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			// config.externals.push('encoding');
		}
		return config;
	},
};
