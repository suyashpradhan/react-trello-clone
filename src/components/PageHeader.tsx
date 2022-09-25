/** @format */

import { Box, Title, Button, Grid } from '@mantine/core';
import React from 'react';

export default function PageHeader() {
	return (
		<Box
			component='header'
			sx={(theme) => ({
				backgroundColor: theme.colors.dark[8],
				borderBottomColor: theme.colors.dark[8],
				paddingTop: 6,
				paddingLeft: 12,
			})}>
			<Grid justify='start' align='center'>
				<Grid.Col span={1}>
					<Title
						size='lg'
						sx={(theme) => ({
							color: theme.colors.gray[2],
						})}>
						Trello
					</Title>
				</Grid.Col>
				<Grid.Col span={1}>
					<Button variant='outline'>Create Board</Button>
				</Grid.Col>
			</Grid>
		</Box>
	);
}
