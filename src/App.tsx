import React, { useState, useEffect } from 'react';
import { AppBar, TextField } from '@material-ui/core';

interface InputRowProps {
	label: string;
	link: string;
}

const InputRow = (props: InputRowProps) => {
	return (
		<div>
			<TextField id='standard-basic' label='Label' value={props.label} />
			<TextField
				id='standard-basic'
				label='CDN link'
				value={props.link}
			/>
		</div>
	);
};

const App = () => {
	const [CDNs, setCDNs] = useState([
		{ label: 'lodash', link: 'www.blabla.com' },
	]);

	useEffect(() => {
		chrome.browserAction.onClicked.addListener(function (tab) {
			console.log('tab :>> ', tab);
            alert('icon clicked');
		});
	}, []);

	return (
		<div style={{ minWidth: 300, height: 500 }}>
			<AppBar
				position={'static'}
				style={{
					height: 40,
					padding: 10,
					fontWeight: 500,
					fontSize: 15,
				}}
			>
				Boaz - window CDN injector
			</AppBar>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					padding: 10,
					fontSize: 14,
				}}
			>
				{CDNs.map((cdn,idx) => {
					return <InputRow key={idx} label={cdn.label} link={cdn.link} />;
				})}
			</div>
		</div>
	);
};

export default App;
