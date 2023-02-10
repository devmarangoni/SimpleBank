import fastify, { FastifyInstance } from 'fastify';
import { prisma } from './lib/prisma'
import { Decimal } from '@prisma/client/runtime';

export async function appRoutes(app: FastifyInstance) {
   app.get('/', async (req, reply) => {
        const userJoao = await prisma.user.findMany({
            where: {
                name: {
                    startsWith: 'João'
                }
            }
        });
   });
   
    app.post('/newcostumer', async (req:any, reply) => {
        const newUserData = req.body;
        await prisma.user.create({
            data: {
                email: newUserData.email,
                name: newUserData.name,
                telefone: newUserData.phone
            }
        })
        .then(async createCostumer => {
            const newCostumerName:string = createCostumer.name;
            return reply.send(JSON.stringify({"successMessage":"The new costumer " + newCostumerName + " has been registered"}))
        })
        .catch(error => reply.send(JSON.stringify({"errorMessage":error})))   
   });

   app.post('/transfer', async (req:any, reply) => {
        const transferEmail = req.body.yourEmail;
        const receivingEmail = req.body.personEmail;
        const amount = new Decimal(+(req.body.amount))

        await prisma.user.findUnique({
            where: {
                email: transferEmail
            }
        }).then(async (transferAccount) => {
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
                            .then(async () => {
                                return reply.send(JSON.stringify({"successMessage":"Your trasfer has been successfully made to the person","warnMessage":"Check your current balance, check your current balance clicking in back button"}))
                            });
                        } else {
                            return reply.send(JSON.stringify({"errorMessage":"The client you tried to transfer does not exist"}));
                        }
                    });
                });  
            } else {
                if(transferAccount === null) {
                    return reply.send(JSON.stringify({"errorMessage":"Costumer not found"}));
                } else {
                    const amount:Decimal = transferAccount.saldo;
                    return reply.send(JSON.stringify({"errorMessage":"You don't have amount for make a transfer", "CurrentAmount":{amount}}))
                }
            }
        });      
   });

   app.post('/balance', async (req:any, reply) => {
        const userEmail = req.body.email;
        if(userEmail != null) {
            await prisma.user.findUnique({
                where: {
                    email: userEmail,
                }
            })
            .then(user => {
                if(user === null) {
                    return reply.send(JSON.stringify({ "errorMessage": "costumer not found" }))
                } else {
                    const saldo:Decimal = user.saldo;
                    return reply.send(JSON.stringify({saldo}))
                }
            })
            .catch(error => reply.send(JSON.stringify({"errorMessage":error})))
        } else {
            return reply.send(JSON.stringify({ "errorMessage": "some error not found" }))
        }
   });

   app.post('/deposit', async (req:any, reply) => {
        const accountEmail = req.body.email;
        const amountOfDeposit = new Decimal(req.body.amount);
        await prisma.user.findUnique({
            where: {
                email: accountEmail
            }
        })
        .then(async userResponse => {
            if(userResponse != null){
                const newAmount = new Decimal(userResponse.saldo).add(amountOfDeposit);
                await prisma.user.update({
                    where: {
                        email: userResponse.email
                    },
                    data: {
                        saldo: newAmount
                    }
                })
                .then(async () => {
                    return reply.send(JSON.stringify({"successMessage": "Your deposit has been made"}))
                })
                .catch(error => reply.send(JSON.stringify({"errorMessage":error})));
            } else {
                return reply.send(JSON.stringify({"errorMessage": "Costumer not found"}))
            }
        })
        .catch(error => reply.send(JSON.stringify({"errorMessage":error})));
   });

   app.post('/withdraw', async (req:any, reply) => {
        const accountEmail = req.body.email;
        const amount:Decimal = new Decimal(req.body.amount);
        await prisma.user.findUnique({
            where: {
                email: accountEmail
            }
        })
        .then(async userResponse => {
            if(userResponse != null){
                const newAmount:Decimal = new Decimal(userResponse.saldo).sub(amount);
                await prisma.user.update({
                    where: {
                        email: userResponse.email
                    },
                    data: {
                        saldo: newAmount
                    }
                })
                .then(async () => {
                    return reply.send(JSON.stringify({"successMessage": "Your withdrawal has been executed, go to the nearest cashier"}))
                })
                .catch(error => reply.send(JSON.stringify({"errorMessage":error})))
            } else {
                return reply.send(JSON.stringify({"errorMessage":"Costumer not found"}));
            }
        })
        .catch(error => reply.send(JSON.stringify({"errorMessage": error})))
   });

   app.post('/makepix', async (req:any, reply) => {
        const userData = req.body;
        await prisma.user.findUnique({
            where: {
                email: userData.email,
            }
        })
        .then(async userResponse => {
            if(userResponse != null && userResponse.saldo >= userData.amount) {
                const transferPixAmount:Decimal = new Decimal(userResponse.saldo).sub(userData.amount);
                await prisma.user.update({
                    where: {
                        email: userResponse.email,
                    },
                    data: {
                        saldo: transferPixAmount,
                    }
                })
                .then(async () => {
                    return reply.send(JSON.stringify({"successMessage": "Your pix transfer was successful"}))
                })
                .catch(error => reply.send(JSON.stringify({"errorMessage":error})));
            } else {
                if(userData.email === null) {
                    return reply.send(JSON.stringify({"errorMessage":"Costumer not found"}));
                } else {
                    const amount:Decimal | undefined = userResponse?.saldo;
                    return reply.send(JSON.stringify({"errorMessage":"You don't have amount for make a transfer", "CurrentAmount":{amount}}))
                }
            }
        })
        .catch(error => reply.send(JSON.stringify({"errorMessage": error})));
   });
}