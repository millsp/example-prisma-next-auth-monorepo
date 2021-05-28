import type { Resolvers } from "../generated/server";

export const resolvers: Resolvers = {
	Query: {
		/** Get a single user. */
		user: async (_, { id }, ctx) => {
			const user = await ctx.prisma.user.findUnique({
				where: {
					id,
				},
			});
			return user;
		},

		/** Get all users. */
		allUsers: async (_, __, ctx) => {
			const users = await ctx.prisma.user.findMany();
			return users;
		},

	}
};
