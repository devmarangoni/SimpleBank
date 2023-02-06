import { FastifyInstance } from 'fastify';
import { prisma } from './lib/prisma'

export async function appRoutes(app: FastifyInstance) {
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
   
    app.post('/teste', async (req:any) => {
        const newUserData = req.body;
        
        await prisma.user.create({
            data: {
                email: newUserData.email,
                name: newUserData.name,
                telefone: newUserData.phone
            }
        });
   });
}

