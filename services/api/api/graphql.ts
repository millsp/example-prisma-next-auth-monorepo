import { ApolloServer } from "apollo-server-micro";

import {
	loadFilesSync,
	makeExecutableSchema,
	mergeResolvers,
	mergeTypeDefs,
} from "graphql-tools";
import path from "path";

import { createContext } from "../src/context";

const typeDefs = mergeTypeDefs(
	loadFilesSync(path.join(__dirname, `../src/graphql/types`))
);

const resolvers = mergeResolvers(
	loadFilesSync(
		path.join(__dirname, `../src/graphql/resolvers`)
	)
);

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const server = new ApolloServer({
	schema,
	// introspection: true,
	// playground: true,
	context: ({ req }) => createContext({ req }),
});

export default server.createHandler({
	path: `/api/graphql`,
});
