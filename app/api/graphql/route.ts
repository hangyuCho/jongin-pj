import { readFileSync } from "fs";
import { join } from "path";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import getMusics from "@/apollo/resolvers/music.resolver";

const typeDefs = readFileSync(
    join(process.cwd(), "apollo/documents/schema.gql"),
    "utf-8"
);

const resolvers: { Query: { musics: (parent, args: { first: number; after: number }) => Promise<{ pageInfo: { hasNextPage: boolean; endCursor: any }; edges: any }> } } = {
    Query: {
        musics: getMusics,
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req }),
});

export { handler as GET, handler as POST };
