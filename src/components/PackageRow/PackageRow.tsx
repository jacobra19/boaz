import React, { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

interface PackageRowProps {
	name: string;
	version: string;
	onChange: ({
		name,
		isChecked,
	}: {
		name: string;
		isChecked: boolean;
	}) => void;
}

const PackageRow = ({ name, version, onChange }: PackageRowProps) => {
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		onChange({ name, isChecked });
	}, [isChecked]);

	return (
		<FormControlLabel
			control={
				<Checkbox
					checked={isChecked}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setIsChecked(event.target.checked);
					}}
				/>
			}
			label={`${name}@${version}`}
		/>
	);
};

export default PackageRow;
