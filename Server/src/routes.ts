import { FastifyInstance } from 'fastify';
import { prisma } from './lib/prisma'
import { Decimal } from '@prisma/client/runtime';

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
   
    app.post('/newcostumer', async (req:any) => {
        const newUserData = req.body;
        
        await prisma.user.create({
            data: {
                email: newUserData.email,
                name: newUserData.name,
                telefone: newUserData.phone
            }
        });
   });

   app.post('/transfer', async (req:any) => {
        const transferEmail = req.body.yourEmail;
        const receivingEmail = req.body.personEmail;
        const amount = new Decimal(+(req.body.amount))

        await prisma.user.findUnique({
            where: {
                email: transferEmail
            }
        }).then(async transferAccount => {
            if(transferAccount != null && transferAccount.saldo >= amount){
                await prisma.user.update({
                    where: {
                        id: transferAccount.id,
                    },
                    data: {
                        saldo: transferAccount.saldo.sub(amount)
                    }
                })
                .then(async () => {
                    await prisma.user.findUnique({
                        where: {
                            email: receivingEmail
                        }
                    })
                    .then(async receivignAccount => {
                        if(receivignAccount != null && receivignAccount != undefined) {
                            await prisma.user.update({
                                where: {
                                    id: receivignAccount.id
                                },
                                data: {
                                    saldo: receivignAccount.saldo.add(amount)
                                }
                            })
                        }
                    });
                });  
            } 
        });      
   });

   app.post('/balance', async (req: any, res:any) => {
        const userEmail = req.body.email;
        await prisma.user.findUnique({
            where: {
                email: userEmail,
            }
        })
        .then(user => {
            if(user === null) {
                console.log("usuario nao existe");
            } else {
                console.log(user.saldo);
            }
        });
   });
}

