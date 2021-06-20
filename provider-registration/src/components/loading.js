import '../styles/loading.css';

export default function Loding() {
	return (
		<div id="loading" style={{zoom:'1.5',marginLeft:'45%',marginTop:'20%'}}>
			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
            <p>Uploading...</p>
		</div>
	);
}
