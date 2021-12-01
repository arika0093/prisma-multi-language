import asyncio
from numpy import where
from prisma import Client

async def main() -> None:
    client = Client()
    await client.connect()

    # write your queries here
    user = await client.user.find_first(
        where = {
            'name': 'John Doe'
        }
    )
    
    for p in user.posts:
        print(p.title)
    
    await client.disconnect()

if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())
