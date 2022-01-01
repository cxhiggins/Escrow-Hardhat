import {ethers} from 'ethers';
import deploy from './deploy';
import addContract from './addContract';
import "./index.scss";

let contracts = 0;
async function newContract() {
  const beneficiary = document.getElementById("beneficiary").value;
  const arbiter = document.getElementById("arbiter").value;
  const value = ethers.utils.parseEther(document.getElementById("ether").value);
  const contract = await deploy(arbiter, beneficiary, value);
  addContract(++contracts, contract, arbiter, beneficiary, value);
}

document.getElementById("deploy").addEventListener("click", newContract);

// Display previous contracts for the given sender
// const provider = new ethers.providers.Web3Provider(ethereum);
// var api = require('etherscan-api').init('XDEJRD4U15YJEKE88I231K3TFEXKTNWUQK','rinkeby', '3000');

// provider.getSigner().getAddress().then(function(address) {
//   var txlist = api.account.txlist(address, 1, 'latest', 1, 100, 'asc')
//     .then(function(transactions) {
//       console.log(transactions);
//       for (const transaction of transactions.result) {
//         if (
//           transaction.from == "0x8a93cc16a3143d8dd5bc9c2c2455d95f9f0414a0" &&
//           transaction.to != ""
//         ) {
//           console.log(transaction);
//         }
//       }
//     });
// });