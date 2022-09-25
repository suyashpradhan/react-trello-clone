/** @format */

import React from 'react';
import { Grid, Image } from '@mantine/core';

export const AppLanding = () => {
	return (
		<Grid justify='center' align='center'>
			<Image src='/board.svg' alt='Create Board' width={700} style={{ objectFit: 'cover' }} />
		</Grid>
	);
};
