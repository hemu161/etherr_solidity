import web3 from './web3';
import campaignFactory from './build/campaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(campaignFactory.interface),
	'0x9F4d84e4ff7A73b76dA074bb9cf90cd9dF91A283'
);

export default instance;