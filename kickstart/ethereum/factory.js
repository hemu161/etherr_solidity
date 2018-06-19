import web3 from './web3';
import campaignFactory from './build/campaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(campaignFactory.interface),
	'0xD58656bd8bd8B87bF7C749f4bD0179b12b6e257f'
);

export default instance;