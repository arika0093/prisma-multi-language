import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

(async () => {
	const user = await prisma.user.findFirst({
		include: {
			"posts": true
		}
	})
	const titles = user.posts?.map(p => p.title)
	

	return true
})();
