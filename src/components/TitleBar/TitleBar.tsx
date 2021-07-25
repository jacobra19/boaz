import React from 'react';
import { AppBar } from '@material-ui/core';

const TitleBar = ({title}:{title:string}) => {
	return (
		<AppBar
			position={'static'}
			style={{
				height: 40,
				padding: 10,
				fontWeight: 500,
				fontSize: 15,
			}}
		>
			{title}
		</AppBar>
	);
};

export default TitleBar;
