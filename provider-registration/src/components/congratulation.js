import React from 'react';

import Grid from '@material-ui/core/Grid';

import Loading from './loading'

export default function done() {
	return (
		<div>
			<Loading />
			<Grid id="congoGrid" style={{display:'none'}} container spacing={1}>
				<Grid item xs={12} sm={12}>
					<br />
					<span className="black--text text-h5 dark-v" style={{ fontSize: '27px', marginLeft: '30px' }}>
						Done <strong>:)</strong>
					</span>
				</Grid>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<Grid item xs={12} sm={12}>
					<img
						src="https://ak.picdn.net/shutterstock/videos/1068883754/thumb/11.jpg?ip=x480"
						alt="Green-Tick-img"
						style={{ height: '90px', width: '160px', marginLeft: '40%' }}
					></img>
				</Grid>
				<Grid item xs={12} sm={12} style={{ margin: '30px auto', width: '80%', textAlign: 'center' }}>
					<span className="black--text text-h5 dark-v" style={{ fontSize: '30px' }}>
						<strong> Congratulation </strong> for be a member of this Insurance family as a{' '}
						<em>service provider</em>
					</span>
				</Grid>
				<br />
				<br />
			</Grid>
		</div>
	);
}
