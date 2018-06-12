const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface,bytecode } = require('./compile');

const provider= new HDWalletProvider(
	'first art silver range must say heart angry sword join great used',
	'https://rinkeby.infura.io/ILv6kwdIZV0FzKhS7YYQ'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from',accounts[0]);
	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data:'0x'+bytecode})
		.send({ gas : '1000000',from : accounts[0],gasPrice: web3.utils.toWei('2', 'gwei') });

	console.log('Contract deployed to',result.options.address);
};
deploy();