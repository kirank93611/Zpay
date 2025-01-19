import Web3 from 'web3';
import {PrismaClient} from "@prisma/client"

export class walletServices {
    private web3:Web3;
    private prisma:PrismaClient

    constructor() {
        this.web3=new Web3(process.env.ETH_NODE_URL);
        this.prisma=new PrismaClient();
    }

    async createWallet(userId:number) {
        try{
            const account=this.web3.eth.accounts.create();

            const wallet=this.prisma.wallet.create({
                data:{
                    userId,
                    address:account.address,
                    privateKey:account.privateKey,
                    asset:'ETH',
                    balance:0
                }
            });
            return wallet;
        }
        catch(error){
            throw new Error('wallet creation failed!');
        }
    }
}