import axios from 'axios';
import store from '../store/store';
import { baseURL, setOrg } from './URLs';
import setRates from '../services/setRateDetails';

async function setOrganization() {
	const state = store.getState();

	const obj = {
		organization_id: parseInt(state.organization.id),
		organization_name: state.organization.name,
		organization_location: state.organization.location,
	};
	await axios
		.post(baseURL + setOrg, obj)
		.then(function (response) {
			console.log(response);
			setRates();
		})
		.catch(function (error) {
			console.log(error);
		});
}

export default setOrganization;
