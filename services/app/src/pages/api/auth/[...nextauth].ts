import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";

import { PrismaClient } from "api/node_modules/@prisma/client";

let prisma;

if (process.env.NODE_ENV === `production`) {
	prisma = new PrismaClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient();
	}
	prisma = global.prisma;
}

export default NextAuth({
	adapter: Adapters.Prisma.Adapter({ prisma }),

	providers: [
		Providers.Email({
			name: `Magic Link`,
			server: `smtp://${process.env.EMAIL_USERNAME}:${process.env.EMAIL_PASSWORD}@${process.env.EMAIL_HOST}:587`,
			from: process.env.EMAIL_FROM,
		}),
	],
	database: {
		type: `postgres`,
		url: `${process.env.DATABASE_URL}?ssl=no-verify`,
	},

	// a random string used to hash tokens, sign cookies and generate crytographic keys
	secret: process.env.SECRET,

	session: {
		// use JSON Web Tokens for session instead of database sessions
		jwt: false,
		// seconds - how long until an idle session expires and is no longer valid
		maxAge: 7 * 24 * 60 * 60, // 7 days
	},
});
