import axios from 'axios';

import store from '../store/store';
import * as actions from '../store/actionTypes';

import { baseURL, allServices } from './URLs';

function getServices() {
	axios
		.get(baseURL + allServices)
		.then((response) => {
			const services = response.data;
			let defServices = [];

			services.forEach((element) => {
				let service = {
					name: element.service_Name,
					id: element.service_Id.toString(),
				};
				defServices.push(service);
			});

			store.dispatch({
				type: actions.DEFINED_SERVICES,
				payload: {
					services: defServices,
				},
			});
		})
		.catch(function (error) {
			// handle error
			console.log(error);
			alert('Exception occured');
		})
		.then(function () {
			// always executed
		});
}
export default getServices;
