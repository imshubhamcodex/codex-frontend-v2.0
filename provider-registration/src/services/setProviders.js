import axios from 'axios';
import store from '../store/store';
import { baseURL, setProvider } from './URLs';

async function setProv() {
	const state = store.getState();

	for (let i = 0; i < state.providers.length; i++) {
		let provider = state.providers[i];

		let obj = {
			organization_id: parseInt(provider.orgID),
			email_id: provider.email,
			provider_id: parseInt(provider.id),
			gender: provider.gender === 'Male' ? 'M' : 'F',
			phone_number: provider.mobile,
			provider_name: provider.name,
		};
		await axios
			.post(baseURL + setProvider, obj)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	document.getElementById('loading').style.display = 'none';
	document.getElementById('congoGrid').style.display = 'block';
}

export default setProv;
