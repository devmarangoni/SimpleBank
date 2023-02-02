import fastify from "fastify";
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const app = fastify();
app.register(cors);

app.get('/', async () => {
    const userJoao = await prisma.user.findMany({
        where: {
            name: {
                startsWith: 'João'
            }
        }
    });
    return userJoao;
});

app.listen({port: 3333}).then(() => {
    console.log('Server running');
});

// npx tsx src/server.ts