import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
const ActionButton = ({
	onClick,
	isLoading,
    isDisabled,
}: {
	onClick: () => void;
	isLoading: boolean;
    isDisabled: boolean;
}) => {
	return (
		<Button onClick={onClick} color={'secondary'} variant={'contained'} disabled={isDisabled || isLoading} style={{marginTop:10}}>
			{isLoading ? <CircularProgress size={24} /> : 'FETCH PACKAGES'}
		</Button>
	);
};

export default ActionButton;
