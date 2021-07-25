import React, { useState } from 'react';
import { TitleBar, PackageRow, ActionButton } from './components';

const CDN_URL = 'https://cdn.jsdelivr.net/npm/package@version/package.js';

const PACKAGES = [
	{
		name: 'lodash',
		version: '4.17.21',
	},
	{
		name: 'moment',
		version: '2.29.1',
	},
	{
		name: 'dayjs',
		version: '1.10.6',
	},
];

const App = () => {
	const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	// TODO: finish injecting packages into the app
	const getData = async () => {
		setIsLoading(true);

		const getCDNLink = (name: string, version: string): string => {
			return `https://cdn.jsdelivr.net/npm/${name}@${version}/${name}.min.js`;
		};

		chrome.tabs.query(
			{ active: true, currentWindow: true },
			function (tabs) {
				const tab = tabs[0];
				let CDNs = selectedPackages.map((name) => {
					return getCDNLink(
						name,
						PACKAGES.filter((p) => p.name === name)[0].version
					);
				});
				if (tab.id) {
					chrome.tabs.sendMessage(
						tab.id,
						{
							CDNs,
						},
						(msg) => {
							setTimeout(() => {
								setIsLoading(false);
							}, 1000);
							console.log('result message:', msg);
						}
					);
				}
			}
		);
	};

	const handleInputChange = ({
		name,
		isChecked,
	}: {
		name: string;
		isChecked: boolean;
	}) => {
		if (selectedPackages.indexOf(name) === -1 && isChecked) {
			setSelectedPackages((prevState) => [...prevState, name]);
		} else {
			setSelectedPackages((prevState) => [
				...prevState.filter((x) => x !== name),
			]);
		}
	};

	return (
		<div style={{ minWidth: 300, height: '100%' }}>
			<TitleBar title='Boaz - window CDN injector' />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: 10,
					fontSize: 14,
				}}
			>
				{PACKAGES.map(({ name, version }, idx) => {
					return (
						<PackageRow
							key={idx}
							name={name}
							version={version}
							onChange={handleInputChange}
						/>
					);
				})}
				<ActionButton
					onClick={getData}
					isLoading={isLoading}
					isDisabled={!selectedPackages.length}
				/>
			</div>
		</div>
	);
};

export default App;
