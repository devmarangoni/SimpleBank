import fastify, { FastifyInstance } from 'fastify';
import { prisma } from './lib/prisma'
import { Decimal } from '@prisma/client/runtime';

export async function appRoutes(app: FastifyInstance) {
    app.post('/newcostumer', async (req:any, reply) => {
        const newUserData = req.body;
        try {
            const newCostumer = await prisma.user.create({
                data: {
                    email: newUserData.email,
                    name: newUserData.name,
                    telefone: newUserData.phone
                }
            });
            const newCostumerName = newCostumer.name;
            return reply.send({"successMessage":"The new costumer " + newCostumerName + " has been registered"});
        } catch(error){
            return reply.send({"errorMessage": error});
        }
   });

   app.post('/transfer', async (req:any, reply) => {
        const transferEmail = req.body.yourEmail;
        const receivingEmail = req.body.personEmail;
        const amount = new Decimal(+(req.body.amount))
        const transferAccount = await prisma.user.findUnique({
            where: {
                email: transferEmail
            }
        });
        const receivingAccount = await prisma.user.findUnique({
            where: {
                email: receivingEmail
            }
        });
        if(receivingAccount != null && receivingAccount != undefined) {
            if(transferAccount != null && transferAccount.saldo >= amount){
                await prisma.user.update({
                    where: {
                        id: transferAccount.id
                    },
                    data: {
                        saldo: transferAccount.saldo.sub(amount)
                    }
                });
                await prisma.user.update({
                    where: {
                        id: receivingAccount.id
                    }, 
                    data: {
                        saldo: receivingAccount.saldo.add(amount)
                    }
                });
                return reply.send({"successMessage": "Your trasfer has been successfully made to the person","currentAmount": transferAccount.saldo})
            } else {
                if(transferAccount === null) {
                    return reply.send({"errorMessage":"Costumer not found"});
                } else {
                    return reply.send({"errorMessage":"You don't have amount for make a transfer","currentAmount": transferAccount.saldo})
                }
            }
        } else {
            return reply.send({"errorMessage": "The costumer you tried to transfer does not exist"});
        }      
   });

   app.post('/balance', async (req: any, reply) => {
        const userEmail = req.body.email;
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: userEmail,
                }
            });
            if(user != null) {
                return reply.send({ saldo: user.saldo });
            } else {
                return reply.send({ "errorMessage": "Costumer not found" });
            }
        } catch(error) {
            return reply.send({"errorMessage": error});
        }
            
   });

   app.post('/deposit', async (req:any, reply) => {
        const accountEmail = req.body.email;
        const amountOfDeposit = new Decimal(req.body.amount);
        try {
            const depositAccount = await prisma.user.findUnique({
                where: {
                    email: accountEmail
                }
            })
            if(depositAccount != null && depositAccount != undefined){
                const newDepositAccountAmount = new Decimal(depositAccount.saldo).add(amountOfDeposit);
                await prisma.user.update({
                    where: {
                        email: depositAccount.email
                    },
                    data: {
                        saldo: newDepositAccountAmount
                    }
                });
                    return reply.send(JSON.stringify({"successMessage": "Your deposit has been made"}))
            } else {
                return reply.send({"errorMessage": "Costumer not found"});
            }
        }catch(error){
            return reply.send({"errorMessage": error});
        }
   });

   app.post('/withdraw', async (req:any, reply) => {
        const userEmail = req.body.email;
        const amount:Decimal = new Decimal(req.body.amount);
        try {
            const userAccount = await prisma.user.findUnique({
                where: {
                    email: userEmail
                }
            });
            if(userAccount != null && userAccount != undefined){
                const newAmount:Decimal = new Decimal(userAccount.saldo).sub(amount);
                await prisma.user.update({
                    where: {
                        email: userAccount.email
                    },
                    data: {
                        saldo: newAmount
                    }
                });
                    return reply.send({"successMessage": "Your withdrawal has been executed, go to the nearest cashier","currentAmount":userAccount.saldo});
            } else {
                return reply.send(JSON.stringify({"errorMessage":"Costumer not found"}));
            }
        }catch(error){
            return reply.send({"errorMessage": error});
        }
   });

   app.post('/makepix', async (req:any, reply) => {
        const userEmail = req.body.email;
        const pixAmount = req.body.amount;
        try {
            const userAccount = await prisma.user.findUnique({
                where: {
                    email: userEmail,
                }
            });
            if(userAccount != null && userAccount.saldo >= pixAmount.amount) {
                const transferPixAmount:Decimal = new Decimal(userAccount.saldo).sub(pixAmount);
                await prisma.user.update({
                    where: {
                        id: userAccount.id,
                    },
                    data: {
                        saldo: transferPixAmount,
                    }
                });
                return reply.send({"successMessage": "Your pix transfer was successful","currentAmount": userAccount.saldo});
            } else {
                if(userAccount === null) {
                    return reply.send({"errorMessage":"Costumer not found"});
                } else {
                    return reply.send({"errorMessage":"You don't have amount for make a transfer", "CurrentAmount": userAccount.saldo});
                }
            }
        }catch(error){
            return reply.send({"errorMessage":error});
        }
   });
}