import React from 'react';

import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';

export default function footer() {
	return (
		<div style={{ backgroundColor: '#f5f5f5' }}>
			<div className="flex-container" style={{ display: 'flex', marginTop: '7%' }}>
				<div style={{ width: '60%', marginLeft: '5%', marginTop: '2%', fontSize: '18px', fontWeight: 'bold' }}>
					ABC Insurance Company
				</div>
				<div style={{ width: '40%', fontSize: '14px', marginTop: '2%' }}>
					<div className="flex-container" style={{ display: 'flex', fontWeight: 'bold' }}>
						<div style={{ width: '20%' }}>Mobile app</div>
						<div style={{ width: '20%' }}>Community</div>
						<div style={{ width: '20%' }}>Company</div>
						<div style={{ width: '20%' }}>News</div>
					</div>
					<div className="flex-container" style={{ display: 'flex' }}>
						<div style={{ width: '20%' }}>Features</div>
						<div style={{ width: '20%' }}>Artists</div>
						<div style={{ width: '20%' }}>About us</div>
						<div style={{ width: '20%' }}>Latest</div>
					</div>
					<div className="flex-container" style={{ display: 'flex' }}>
						<div style={{ width: '20%' }}>Live Share</div>
						<div style={{ width: '20%' }}>The Portal</div>
						<div style={{ width: '20%' }}>Contact us</div>
						<div style={{ width: '20%' }}>Trendings</div>
					</div>
					<div className="flex-container" style={{ display: 'flex' }}>
						<div style={{ width: '20%' }}>Video record</div>
						<div style={{ width: '20%' }}>Live events</div>
						<div style={{ width: '20%' }}>History</div>
						<div style={{ width: '20%' }}>Updates</div>
					</div>
				</div>
				<br />
			</div>
			<hr style={{ marginLeft: '40px', marginRight: '40px' }}></hr>
			<div className="fles-container" style={{ display: 'flex', fontSize: '10px', marginLeft: '5%' }}>
				<div style={{ width: '78%' }}>
					<span className="subheading" style={{ fontSize: '12px' }}>
						© ABC Insurance Company, Inc. {new Date().getFullYear()}. We love our users!
					</span>
				</div>
				<div className="flex-container" style={{ width: '22%', display: 'flex', marginBottom: '1%' }}>
					<div style={{ width: '20%', marginTop: '2%', fontSize: '12px' }}>Follow us:</div>
					<div style={{ width: '10%' }}>
						<Facebook />
					</div>
					<div style={{ width: '10%' }}>
						<Twitter />
					</div>
					<div style={{ width: '10%' }}>
						<LinkedIn />
					</div>
					<div style={{ width: '10%' }}>
						<Instagram />
					</div>
				</div>
			</div>
			<br />
		</div>
	);
}
