const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

(async () => {
	const user = await prisma.user.findFirst({
		include: {
			"posts": true
		}
	})
	const titles = user?.posts?.map(p => p.title)

	if(titles && titles.length > 0) {
		console.log(titles)	
	} else {
		console.log("No posts found")	
	}

	return true
})();
