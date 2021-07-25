import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
const ActionButton = ({
	onClick,
	isLoading,
}: {
	onClick: () => void;
	isLoading: boolean;
}) => {
	return (
		<Button onClick={onClick} color={'secondary'} variant={'contained'} disabled={isLoading}>
			{isLoading ? <CircularProgress size={24} /> : 'FETCH PACKAGES'}
		</Button>
	);
};

export default ActionButton;
