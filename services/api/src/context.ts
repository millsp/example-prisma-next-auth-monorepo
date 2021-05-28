import { PrismaClient } from "@prisma/client";
import { PrismaDelete, onDeleteArgs } from "@paljs/plugins";
import { VercelRequest } from "@vercel/node";

class Prisma extends PrismaClient {
	async onDelete(args: onDeleteArgs) {
		const prismaDelete = new PrismaDelete(this);
		await prismaDelete.onDelete(args);
	}
}

export const prisma = new Prisma({ errorFormat: `pretty` });

export interface Context {
	prisma: Prisma;
	req: VercelRequest;
}

export function createContext({
	req,
}: {
	req: VercelRequest;
}): Context {
	return {
		prisma,
		req,
	};
}
