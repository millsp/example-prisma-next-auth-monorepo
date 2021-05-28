import { PrismaClient } from "api/node_modules/@prisma/client";

declare global {
	namespace NodeJS {
		interface Global {
			document: Document;
			window: Window;
			navigator: Navigator;
			prisma: PrismaClient;
		}
	}
}
