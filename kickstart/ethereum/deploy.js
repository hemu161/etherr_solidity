const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const campaignFactory = require('./build/campaignFactory.json')

const provider= new HDWalletProvider(
	'first art silver range must say heart angry sword join great used',
	'https://rinkeby.infura.io/ILv6kwdIZV0FzKhS7YYQ'
);

const web3 = new Web3(provider);

const deploy = async () => {
	console.log('going to get accounts');
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from',accounts[0]);
	const result = await new web3.eth.Contract(JSON.parse(campaignFactory.interface))
		.deploy({ data:'0x'+campaignFactory.bytecode})
		.send({ gas : '1000000',from : accounts[0],gasPrice: web3.utils.toWei('2', 'gwei') });

	console.log('Contract deployed to',result.options.address);
};
deploy();