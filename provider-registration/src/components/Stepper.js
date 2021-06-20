import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import '../styles/Stepper.css';
import store from '../store/store';

import Congo from './congratulation';
import OrgBox from './OrgBox';
import ProviderBox from './ProviderBox';
import ServiceBox from './ServiceBox';
import ServiceTable from './ServiceTable';
import ProviderTable from './ProviderTable';

import setOrganization from '../services/setOrg';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function getSteps() {
	return ['Get Started', 'Add Providers', 'Add Services', 'Review'];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return (
				<div style={{ width: '100%' }}>
					<br />
					<br />
					<h3 id="org-head">
						Get started with your <strong>name and location</strong>
					</h3>
					<br />
					<div className="text-center">
						<OrgBox />
					</div>
				</div>
			);
		case 1:
			return (
				<div>
					<ProviderBox />
				</div>
			);
		case 2:
			return (
				<div>
					<ServiceBox />
				</div>
			);
		case 3:
			return (
				<div style={{ width: '90%', margin: 'auto auto', display: 'block' }}>
					<h3 style={{ marginTop: '60px' }}>
						Confirm<strong> Details</strong>
					</h3>
					<br></br>
					<ProviderTable />
					<br></br>
					<br></br>
					<hr></hr>
					<br></br>
					<br></br>
					<ServiceTable />
				</div>
			);
		default:
			return 'Unknown step';
	}
}

export default function HorizontalLinearStepper() {
	const classes = useStyles();
	const history = useHistory();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;

		if (activeStep === 3) {
			console.log('Uploading data...');
			const state = store.getState();

			if (Object.keys(state.organization).length === 0) {
				handleBack();
				handleBack();
				handleBack();
				handleBack();

				alert('Organization Detalis Requried');
			} else if (state.providers.length <= 0) {
				handleBack();
				handleBack();
				handleBack();
				alert('Provider Detalis Requried');
			} else if (state.services.length <= 0) {
				handleBack();
				handleBack();
				alert('Services Detalis Requried');
			} else {
				setOrganization();
			}
		}
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSubmit = () => {
		history.push('/');
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		window.location.reload();
	};

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} elevation={4} style={{ backgroundColor: '#fafafa' }}>
				{steps.map((label, index) => {
					const stepProps = {};
					const labelProps = {};

					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps}>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			<div>
				{activeStep === steps.length ? (
					<div>
						<Congo />
						<Button
							style={{
								marginTop: '120px',
								float: 'right',
								marginRight: '120px',
								backgroundColor: 'green',
								color: '#fff',
							}}
							variant="contained"
							onClick={handleSubmit}
							className={classes.button}
						>
							Home
						</Button>
					</div>
				) : (
					<div>
						<div>{getStepContent(activeStep)}</div>
						<div>
							<Button
								style={{
									marginTop: '140px',
									float: 'right',
									marginRight: '120px',
									color: '#fff',
								}}
								variant="contained"
								color="primary"
								onClick={handleNext}
								className={classes.button}
							>
								{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
							</Button>

							<Button
								style={{
									marginTop: '140px',
									float: 'right',
									marginRight: '30px',
								}}
								variant="outlined"
								color="primary"
								disabled={activeStep === 0}
								onClick={handleBack}
								className={classes.button}
							>
								Back
							</Button>
						</div>
					</div>
				)}
			</div>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
}
