const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// UPDATE THESE TWO LINES RIGHT HERE!!!!! <-----------------
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach( async () => {
	// Get list of all accounts
	accounts = await web3.eth.getAccounts();

	// use one of the accounts to deploy the contract
	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data:bytecode, arguments: ['Hi there!']})
		.send({ from : accounts[0], gas : '1000000' });

	// ADD THIS ONE LINE RIGHT HERE!!!!! <---------------------
  	inbox.setProvider(provider);
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		assert.ok(inbox.options.address);
	});

	it('has a default message',async () => {
		const message = await inbox.methods.message().call();
		assert.equal(message,'Hi there!');
	});

	it('can change the message',async () => {
		await inbox.methods.setMessage('bye').send({ from: accounts[0]});
		const message = await inbox.methods.message().call();
		assert.equal(message,'bye');
	});
});