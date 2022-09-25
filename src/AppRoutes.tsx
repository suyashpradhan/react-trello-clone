/** @format */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppLanding } from './AppLanding';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<AppLanding />} />
			<Route path='/boards' />
			<Route path='/boards/:id' />
		</Routes>
	);
};
