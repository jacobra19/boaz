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
		let lodashCDN = 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.js';

		let data = await fetch(lodashCDN);
		console.log('data :>> ', data);
		let texted = await data.text();
		console.log('texted :>> ', texted);
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
		<div style={{ minWidth: 300, height: 500 }}>
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
                <ActionButton onClick={getData} isLoading={isLoading}/>
			</div>
		</div>
	);
};

export default App;
