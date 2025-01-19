// src/services/web3Service.ts
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

export class Web3Service {
  private web3: Web3;
  private contractABI: AbiItem[];
  
  constructor() {
    this.web3 = new Web3(process.env.ETH_NODE_URL);
    this.contractABI = []; // Your contract ABI here
  }

  async sendTransaction(
    from: string,
    to: string,
    amount: string,
    privateKey: string
  ) {
    try {
      const nonce = await this.web3.eth.getTransactionCount(from);
      const gasPrice = await this.web3.eth.getGasPrice();
      
      const tx = {
        from,
        to,
        value: this.web3.utils.toWei(amount, 'ether'),
        gas: 21000,
        gasPrice,
        nonce
      };

      const signedTx = await this.web3.eth.accounts.signTransaction(
        tx,
        privateKey
      );

      const receipt = await this.web3.eth.sendSignedTransaction(
        signedTx.rawTransaction!
      );

      return receipt;
    } catch (error) {
      throw new Error('Transaction failed');
    }
  }

  
}