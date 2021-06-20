import axios from 'axios';
import store from '../store/store';
import { baseURL, setRate } from './URLs';
import setProv from '../services/setProviders';

async function setRates() {
	const state = store.getState();

	for (let i = 0; i < state.services.length; i++) {
		let service = state.services[i];
		let obj = {
			organization_id: parseInt(service.orgID),
			rate: parseInt(service.actualPrice),
			service_id: parseFloat(service.id),
			discounted_rate: parseFloat(service.discountedPrice),
		};
		await axios
			.post(baseURL + setRate, obj)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	setProv();
}

export default setRates;
